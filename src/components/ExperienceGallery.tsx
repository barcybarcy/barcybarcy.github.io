import { useEffect, useId, useRef, useState } from 'react';
import type { KeyboardEvent, TouchEvent } from 'react';
import { useLanguage } from '../i18n';
import './ExperienceGallery.css';

export type ExperienceImage = {
  src: string;
  alt: string;
  caption: string;
  fit?: 'contain' | 'cover';
};

type ExperienceGalleryProps = {
  name: string;
  images: ExperienceImage[];
  expanded: boolean;
  onToggle: () => void;
};

type SwipeStart = { x: number; y: number; time: number };

function GalleryArrow({ previous = false }: { previous?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d={previous ? 'm14 6-6 6 6 6' : 'm10 6 6 6-6 6'}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EnlargeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M14 4h6v6m0-6-7 7M10 20H4v-6m0 6 7-7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExperienceGallery({ name, images, expanded, onToggle }: ExperienceGalleryProps) {
  const { language } = useLanguage();
  const labels =
    language === 'ko'
      ? {
          gallery: '사진 갤러리',
          open: '전체 화면으로 보기',
          close: '전체 화면 닫기',
          previous: '이전 사진',
          next: '다음 사진',
          choose: '사진 선택',
          image: '사진',
          original: '원본 이미지',
          newTab: '새 탭',
          expand: `사진 ${images.length}장 펼치기`,
          collapse: '사진 모아보기 접기',
          collection: `사진 ${images.length}장 모아보기`,
          filmstrip: '사진 목록',
        }
      : {
          gallery: 'image gallery',
          open: 'View full screen',
          close: 'Close full-screen viewer',
          previous: 'Previous image',
          next: 'Next image',
          choose: 'Choose an image',
          image: 'Image',
          original: 'Original image',
          newTab: 'opens in a new tab',
          expand: `Show all ${images.length} images`,
          collapse: 'Collapse image collection',
          collection: `All ${images.length} images`,
          filmstrip: 'Image thumbnails',
        };
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showFilmstrip, setShowFilmstrip] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const scrollAfterToggleRef = useRef<boolean | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const modalThumbnailRef = useRef<HTMLButtonElement | null>(null);
  const swipeStartRef = useRef<SwipeStart | null>(null);
  const suppressClickUntilRef = useRef(0);
  const id = useId();
  const captionId = `${id}-caption`;
  const collectionId = `${id}-collection`;
  const dialogTitleId = `${id}-title`;
  const dialogCaptionId = `${id}-dialog-caption`;
  const filmstripId = `${id}-filmstrip`;
  const hasImages = images.length > 0;
  const hasMultiple = images.length > 1;
  const showCollection = hasMultiple && expanded;
  const currentIndex = Math.min(selectedIndex, Math.max(0, images.length - 1));
  const currentImage = images[currentIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !hasImages || !dialog) return;
    const opener = openerRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (opener?.isConnected) opener.focus({ preventScroll: true });
    };
  }, [isOpen, hasImages]);

  useEffect(() => {
    if (isOpen && showFilmstrip) {
      modalThumbnailRef.current?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  }, [currentIndex, isOpen, showFilmstrip]);

  useEffect(() => {
    const requestedExpansion = scrollAfterToggleRef.current;
    scrollAfterToggleRef.current = null;
    if (requestedExpansion !== expanded) return;

    const frame = window.requestAnimationFrame(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      galleryRef.current?.scrollIntoView({
        block: 'start',
        behavior: reduceMotion ? 'auto' : 'smooth',
      });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [expanded]);

  function toggleCollection() {
    scrollAfterToggleRef.current = !expanded;
    onToggle();
  }

  function imageAlt(image: ExperienceImage, index: number) {
    return image.alt || `${name} · ${labels.image} ${index + 1}`;
  }

  function openViewer(index: number, opener: HTMLButtonElement) {
    if (Date.now() < suppressClickUntilRef.current) return;
    openerRef.current = opener;
    setSelectedIndex(index);
    setShowFilmstrip(false);
    setIsOpen(true);
  }

  function moveImage(offset: number) {
    if (!hasMultiple) return;
    setSelectedIndex((index) => {
      const boundedIndex = Math.min(index, images.length - 1);
      return (boundedIndex + offset + images.length) % images.length;
    });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (!hasMultiple || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    event.stopPropagation();
    moveImage(event.key === 'ArrowLeft' ? -1 : 1);
  }

  function handleTouchStart(event: TouchEvent<HTMLElement>) {
    swipeStartRef.current = null;
    if (!hasMultiple || event.touches.length !== 1 || (window.visualViewport?.scale ?? 1) > 1.05) {
      return;
    }
    const touch = event.touches[0];
    swipeStartRef.current = { x: touch.clientX, y: touch.clientY, time: event.timeStamp };
  }

  function handleTouchMove(event: TouchEvent<HTMLElement>) {
    const start = swipeStartRef.current;
    if (!start) return;
    if (event.touches.length !== 1 || (window.visualViewport?.scale ?? 1) > 1.05) {
      swipeStartRef.current = null;
      return;
    }
    const touch = event.touches[0];
    const distanceY = Math.abs(touch.clientY - start.y);
    if (distanceY > 20 && distanceY > Math.abs(touch.clientX - start.x)) {
      swipeStartRef.current = null;
    }
  }

  function handleTouchEnd(event: TouchEvent<HTMLElement>) {
    const start = swipeStartRef.current;
    swipeStartRef.current = null;
    if (!start || event.touches.length > 0 || event.changedTouches.length !== 1) return;
    const touch = event.changedTouches[0];
    const distanceX = touch.clientX - start.x;
    const distanceY = touch.clientY - start.y;
    if (
      Math.abs(distanceX) >= 60 &&
      Math.abs(distanceX) > Math.abs(distanceY) * 1.5 &&
      event.timeStamp - start.time < 900 &&
      (window.visualViewport?.scale ?? 1) <= 1.05
    ) {
      suppressClickUntilRef.current = Date.now() + 400;
      moveImage(distanceX < 0 ? 1 : -1);
    }
  }

  const swipeHandlers = {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    onTouchCancel: () => {
      swipeStartRef.current = null;
    },
  };

  function thumbnails(inViewer: boolean) {
    return (
      <div
        className={`experience-gallery-thumbnails${inViewer ? ' is-viewer' : ''}`}
        role="group"
        aria-label={labels.choose}
      >
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            ref={inViewer && currentIndex === index ? modalThumbnailRef : undefined}
            type="button"
            aria-pressed={currentIndex === index}
            aria-label={`${labels.image} ${index + 1}: ${imageAlt(image, index)}`}
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={image.src}
              alt={imageAlt(image, index)}
              loading="lazy"
              decoding="async"
              style={{ objectFit: image.fit ?? 'contain' }}
            />
          </button>
        ))}
      </div>
    );
  }

  if (!currentImage) return null;
  const currentAlt = imageAlt(currentImage, currentIndex);
  const counter = `${String(currentIndex + 1).padStart(2, '0')} / ${String(images.length).padStart(2, '0')}`;

  return (
    <div
      ref={galleryRef}
      className="experience-gallery"
      role="group"
      aria-label={`${name} · ${labels.gallery}`}
      onKeyDown={handleKeyDown}
    >
      {!showCollection && (
        <>
          <figure className="experience-gallery-figure">
            <button
              className="experience-gallery-open"
              type="button"
              aria-haspopup="dialog"
              aria-label={`${currentAlt} · ${labels.open}`}
              aria-describedby={captionId}
              onClick={(event) => openViewer(currentIndex, event.currentTarget)}
              {...swipeHandlers}
            >
              <img
                src={currentImage.src}
                alt={currentAlt}
                loading="lazy"
                decoding="async"
                draggable="false"
              />
              <span className="experience-gallery-enlarge" aria-hidden="true">
                <EnlargeIcon />
                <span>{labels.open}</span>
              </span>
            </button>
            <figcaption className="experience-gallery-meta">
              <span
                id={captionId}
                className="experience-gallery-caption"
                aria-live={isOpen ? 'off' : 'polite'}
                aria-atomic="true"
              >
                <span className="experience-gallery-counter">{counter}</span>
                <span>{currentImage.caption || currentAlt}</span>
              </span>
              {hasMultiple && (
                <div className="experience-gallery-controls">
                  <button type="button" onClick={() => moveImage(-1)} aria-label={labels.previous}>
                    <GalleryArrow previous />
                  </button>
                  <button type="button" onClick={() => moveImage(1)} aria-label={labels.next}>
                    <GalleryArrow />
                  </button>
                </div>
              )}
            </figcaption>
          </figure>
          {hasMultiple && thumbnails(false)}
        </>
      )}
      {hasMultiple && (
        <div className="experience-gallery-toolbar">
          <button
            className="experience-gallery-toggle"
            type="button"
            aria-expanded={showCollection}
            aria-controls={collectionId}
            onClick={toggleCollection}
          >
            <span>{showCollection ? labels.collapse : labels.expand}</span>
            <span aria-hidden="true">{showCollection ? '−' : '+'}</span>
          </button>
        </div>
      )}
      {hasMultiple && (
        <div
          id={collectionId}
          className="experience-gallery-collection"
          hidden={!showCollection}
          role="group"
          aria-label={labels.collection}
        >
          {showCollection &&
            images.map((image, index) => (
              <figure key={`${image.src}-${index}`}>
                <button
                  type="button"
                  className="experience-gallery-collection-image"
                  aria-haspopup="dialog"
                  aria-label={`${imageAlt(image, index)} · ${labels.open}`}
                  onClick={(event) => openViewer(index, event.currentTarget)}
                >
                  <img
                    src={image.src}
                    alt={imageAlt(image, index)}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="experience-gallery-enlarge" aria-hidden="true">
                    <EnlargeIcon />
                  </span>
                </button>
                <figcaption>
                  <span className="experience-gallery-counter">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{image.caption || imageAlt(image, index)}</span>
                </figcaption>
              </figure>
            ))}
        </div>
      )}
      <dialog
        ref={dialogRef}
        className="experience-gallery-dialog"
        aria-labelledby={dialogTitleId}
        aria-describedby={dialogCaptionId}
        onCancel={(event) => {
          event.preventDefault();
          setIsOpen(false);
        }}
      >
        {isOpen && (
          <>
            <header className="experience-gallery-dialog-header">
              <div className="experience-gallery-dialog-title">
                <h2 id={dialogTitleId}>{name}</h2>
                <span className="experience-gallery-counter">{counter}</span>
              </div>
              {hasMultiple && (
                <button
                  className="experience-gallery-filmstrip-toggle"
                  type="button"
                  aria-label={labels.filmstrip}
                  aria-expanded={showFilmstrip}
                  aria-controls={filmstripId}
                  onClick={() => setShowFilmstrip(!showFilmstrip)}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="7" height="6" rx="1" />
                    <rect x="14" y="4" width="7" height="6" rx="1" />
                    <rect x="3" y="14" width="7" height="6" rx="1" />
                    <rect x="14" y="14" width="7" height="6" rx="1" />
                  </svg>
                </button>
              )}
              <a
                className="experience-gallery-original"
                href={currentImage.src}
                target="_blank"
                rel="noreferrer"
                aria-label={`${labels.original} (${labels.newTab})`}
              >
                <span className="experience-gallery-original-label">{labels.original}</span>
                <span aria-hidden="true">↗</span>
              </a>
              <button
                className="experience-gallery-close"
                type="button"
                aria-label={labels.close}
                onClick={() => setIsOpen(false)}
                autoFocus
              >
                <span aria-hidden="true">×</span>
              </button>
            </header>
            <div className="experience-gallery-full-image" {...swipeHandlers}>
              <img
                src={currentImage.src}
                alt={currentAlt}
                loading="lazy"
                decoding="async"
                draggable="false"
              />
            </div>
            <footer className="experience-gallery-dialog-footer">
              <div className="experience-gallery-dialog-caption-row">
                {hasMultiple && (
                  <button
                    className="experience-gallery-dialog-arrow"
                    type="button"
                    onClick={() => moveImage(-1)}
                    aria-label={labels.previous}
                  >
                    <GalleryArrow previous />
                  </button>
                )}
                <p id={dialogCaptionId} aria-live="polite" aria-atomic="true">
                  <span className="experience-gallery-viewer-count">{counter} · </span>
                  {currentImage.caption || currentAlt}
                </p>
                {hasMultiple && (
                  <button
                    className="experience-gallery-dialog-arrow"
                    type="button"
                    onClick={() => moveImage(1)}
                    aria-label={labels.next}
                  >
                    <GalleryArrow />
                  </button>
                )}
              </div>
              {hasMultiple && (
                <div id={filmstripId} hidden={!showFilmstrip}>
                  {showFilmstrip && thumbnails(true)}
                </div>
              )}
            </footer>
          </>
        )}
      </dialog>
    </div>
  );
}
