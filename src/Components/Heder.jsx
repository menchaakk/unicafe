import PropTypes from 'prop-types';

const Heder = (props) => {
    return(
        <h1>{props.text}</h1>
    )
}
Heder.propTypes = {
    text: PropTypes.string
}

export default Heder