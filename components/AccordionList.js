import AccordionItem from "./AccordionItem";

export default function AccordionList(props) {
  const { items, onToggle } = props;

  function setImageUrl(imageUrl) {
    onToggle(imageUrl);

    return imageUrl;
  }

  return (
    <div className="accordion" id="accordionExample">
      {items.map((item, key) => (
        <AccordionItem
          key={key}
          id={key}
          title={item.title}
          image={item.image}
          text={item.text}
          onToggle={() => setImageUrl(item.image)}
        />
      ))}
    </div>
  );
}
