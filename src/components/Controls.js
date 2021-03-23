import PropTypes from 'prop-types'

function Controls (props) {

  return (
    <div className={`${props.className} space-x-6`}>
      <button>Create new maze</button>
      <button>Select existing maze</button>
      <button>Solve maze</button>
    </div>
  )

}

Controls.defaultProps = {
  className: ''
}

Controls.propTypes = {
  className: PropTypes.string,
}

export default Controls