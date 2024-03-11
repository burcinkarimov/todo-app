function TextInput({ placeholder, value, onChange }) {
  return (
    <input 
      type="text" 
      className="border-[1px] px-4 py-2" 
      placeholder={placeholder} 
      value={value}
      onChange={onChange}
    />
  )
}

export default TextInput;