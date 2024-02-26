function PrimaryButton({ text }) {
  return(
    <button type="submit" className="px-4 py-2 w-20 border-[1px] bg-indigo-100 hover:bg-indigo-300">{text}</button>
  )
}

export default PrimaryButton;