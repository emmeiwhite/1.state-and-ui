type ButtonPropType = {
  handleClick: () => void
  children: React.ReactNode
  disabled: boolean
}

export default function Button({ handleClick, children, disabled }: ButtonPropType) {
  return (
    <button
      disabled={disabled}
      className={`px-4 py-2 rounded-3xl min-w-[100px]
    ${disabled ? 'bg-amber-50 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
      onClick={handleClick}>
      {children}
    </button>
  )
}
