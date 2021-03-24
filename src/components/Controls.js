import PropTypes from 'prop-types'
import CreateMazeButton from 'components/partials/CreateMazeButton'
import SolveMazeButton from 'components/partials/SolveMazeButton'

function Controls (props) {

  return (
    <div className={`${props.className} space-x-6`}>
      <CreateMazeButton/>
      <SolveMazeButton/>
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