import './Button.css';

const Button = ({className, name}) => (
    <button className={`button-container ${className}`}>{name}</button>
)

export default Button;