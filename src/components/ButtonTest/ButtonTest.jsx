import PropTypes from 'prop-types'
import './ButtonTest.modules.scss'

const ButtonTest = ({ newClass, type, isDisabled, children, variant, onClick, padding }) => {
  return (
    <button className={`btnTest ${variant} ${newClass}`} style={{padding: padding}} type={type} disabled={isDisabled} onClick={onClick} >
        {children}
    </button>
  )
}

ButtonTest.propTypes={
  type: PropTypes.string,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
}

ButtonTest.defaultProps = {
    padding: "14px 25px",
    type: 'button',
    isDisabled: false,
}
  
export default ButtonTest