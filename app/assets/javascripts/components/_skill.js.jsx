var Skill = React.createClass({

  getInitialState() {

  },

  handleEdit() {
    console.log("handling edit from skill")
  },

  render() {
    return (
      <div>
        <h3> { this.props.skill.name } </h3>
        <p><strong> Level:</strong> { this.props.skill.level } </p>
        <p> { this.props.skill.details } </p>
        <button onClick= { this.props.handleDelete }>Delete</button>
        <button onClick= { this.handleEdit }>Edit</button>
      </div>
    )
  }
})
