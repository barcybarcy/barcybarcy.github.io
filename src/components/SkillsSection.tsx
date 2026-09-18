import { getSkills } from '../data';
import { useLanguage } from '../i18n';
import { SkillIcon } from './SkillIcon';
import './SkillsSection.css';

export function SkillsSection() {
  const { language, t } = useLanguage();

  return (
    <section id="skills" className="compact-skills content-width" aria-labelledby="skills-title">
      <h2 id="skills-title">{t.skillsTitle}</h2>
      <ul className="compact-skills-list">
        {getSkills(language).map((name) => (
          <li key={name}>
            <SkillIcon name={name} />
            <span>{name}</span>
          </li>
        ))}
      </ul>
      <div className="compact-skills-credentials">
        <h3>{t.credentialsTitle}</h3>
        <ul>
          <li>
            <SkillIcon name="credential" />
            <span>{t.cloudCredential}</span>
          </li>
          <li>
            <SkillIcon name="license" />
            <span>{t.drivingLicense}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
