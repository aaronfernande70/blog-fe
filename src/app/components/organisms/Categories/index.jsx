import CategoryChip from "../../atoms/CategoryChip";

export default function Categories({categories}) {
  return (
    <div className="flex gap-2 py-4 overflow-scroll mb-4 justify-center">
          {categories?.map((category)=> (<CategoryChip key={category} category={category} />))}
    </div>
  )
}
