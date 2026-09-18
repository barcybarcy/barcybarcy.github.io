import { useEffect, useId, useRef, useState } from 'react';
import type { KeyboardEvent, MouseEvent } from 'react';
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
};

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

export function ExperienceGallery({ name, images }: ExperienceGalleryProps) {
  const { language } = useLanguage();
  const labels =
    language === 'ko'
      ? {
          gallery: '사진 갤러리',
          open: '크게 보기',
          close: '확대 사진 닫기',
          previous: '이전 사진',
          next: '다음 사진',
          choose: '사진 선택',
          image: '사진',
          original: '원본 이미지',
          newTab: '새 탭',
        }
      : {
          gallery: 'image gallery',
          open: 'Enlarge image',
          close: 'Close enlarged image',
          previous: 'Previous image',
          next: 'Next image',
          choose: 'Choose an image',
          image: 'Image',
          original: 'Original image',
          newTab: 'opens in a new tab',
        };
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  const id = useId();
  const captionId = `${id}-caption`;
  const dialogTitleId = `${id}-title`;
  const dialogCaptionId = `${id}-dialog-caption`;
  const hasImages = images.length > 0;
  const hasMultiple = images.length > 1;
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

  function moveImage(offset: number) {
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

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    ) {
      setIsOpen(false);
    }
  }

  if (!currentImage) return null;

  const currentAlt = currentImage.alt || `${name} · ${labels.image} ${currentIndex + 1}`;
  const counter = `${currentIndex + 1} / ${images.length}`;

  return (
    <div
      className="experience-gallery"
      role="group"
      aria-label={`${name} · ${labels.gallery}`}
      onKeyDown={handleKeyDown}
    >
      <figure className="experience-gallery-figure">
        <button
          ref={openerRef}
          className="experience-gallery-open"
          type="button"
          aria-haspopup="dialog"
          aria-label={`${currentAlt} · ${labels.open}`}
          aria-describedby={captionId}
          onClick={() => setIsOpen(true)}
        >
          <img
            src={currentImage.src}
            alt={currentAlt}
            loading="lazy"
            decoding="async"
            style={{ objectFit: currentImage.fit ?? 'cover' }}
          />
          <span className="experience-gallery-enlarge" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" focusable="false">
              <path
                d="M14 4h6v6m0-6-7 7M10 20H4v-6m0 6 7-7"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
      {hasMultiple && (
        <div className="experience-gallery-thumbnails" role="group" aria-label={labels.choose}>
          {images.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              aria-pressed={currentIndex === index}
              aria-label={`${labels.image} ${index + 1}: ${image.alt || name}`}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt || `${name} · ${labels.image} ${index + 1}`}
                loading="lazy"
                decoding="async"
                style={{ objectFit: image.fit ?? 'cover' }}
              />
            </button>
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
        onClick={handleBackdropClick}
      >
        {isOpen && (
          <>
            <div className="experience-gallery-dialog-header">
              <h2 id={dialogTitleId}>{name}</h2>
              <a
                className="experience-gallery-original"
                href={currentImage.src}
                target="_blank"
                rel="noreferrer"
                aria-label={`${labels.original} (${labels.newTab})`}
              >
                {labels.original} <span aria-hidden="true">↗</span>
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
            </div>
            <div className="experience-gallery-full-image">
              <img src={currentImage.src} alt={currentAlt} loading="lazy" decoding="async" />
            </div>
            <div className="experience-gallery-dialog-footer">
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
                <span className="experience-gallery-counter">{counter}</span>
                <span>{currentImage.caption || currentAlt}</span>
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
          </>
        )}
      </dialog>
    </div>
  );
}
