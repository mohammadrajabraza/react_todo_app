const CustomButton = (props) => {
  const {
    isDisabled,
    handleClick,
    className,
    children
  } = props
  return (
    <button
      type='button'
      className={className}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}
export default CustomButton
