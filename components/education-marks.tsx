export default function EducationMarks() {
  return (
    <div className="education-marks" aria-label="Education">
      <a href="/about#education" aria-label="University of Michigan: my education" title="University of Michigan · MA in Educational Studies">
        <img src="/education/umich-block-m.png" alt="University of Michigan" width={44} height={34} />
        <span className="education-tooltip" aria-hidden="true">University of Michigan</span>
      </a>
      <a href="/about#education" aria-label="University of Washington: my education" title="University of Washington · Early Childhood & Family Studies and Psychology">
        <img src="/education/uw-block-w.png" alt="University of Washington" width={40} height={34} />
        <span className="education-tooltip" aria-hidden="true">University of Washington</span>
      </a>
    </div>
  );
}
