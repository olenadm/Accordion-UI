import Image from "next/image";

export default function AccordionItem(props) {
  const { title, image, text, id, onToggle } = props;

  return (
    <div className="accordion-item mt-3">
      <h2 className="accordion-header" id={`heading${id}`}>
        <button
          className={
            id != 0 ? "accordion-button collapsed" : "accordion-button"
          }
          onClick={onToggle}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded={id === 0 ? "true" : "false"}
          aria-controls={`collapse${id}`}
        >
          {title}
        </button>
      </h2>

      <div
        id={`collapse${id}`}
        className={
          id === 0
            ? "show accordion-collapse collapse"
            : "accordion-collapse collapse"
        }
        aria-labelledby={`heading${id}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body pb-4 pt-0 pe-lg-4 text-center">
          <Image
            src={image}
            alt=""
            width={300}
            height={220}
            sizes="(max-width: 768px) 100vw"
            className="d-md-none mx-auto image-fluid"
          />
          <p className="text-start">{text}</p>
        </div>
      </div>
    </div>
  );
}
