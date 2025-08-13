export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-10 ">
      <h2 className="text-2xl font-bold text-gray-600">{title}</h2>
      <p className="text-gray-500 mt-2">{subtitle}</p>
    </div>
  );
}
