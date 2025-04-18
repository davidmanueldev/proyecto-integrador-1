import Tag from "./tag";

const text = "Estás esforzándote por mejorar tus finanzas, pero los métodos tradicionales de gestión financiera te frenan con complejidad innecesaria y una curva de aprendizaje pronunciada.";

export default function Introduction() {
  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Presentamos YaFue</Tag>
        </div>
        <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
          <span>Tu asistente financiero personal impulsado por IA.</span>{" "}
          <span className="text-black/15">{text}</span>
          <span className="gradient-text block">
            Por eso hemos creado YaFue
          </span>
        </div>
      </div>
    </section>
  );
}
