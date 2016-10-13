var AllSkills = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id)
  },

  render() {
    var skills = this.props.skills.map((skill) => {
      return (
        <div key={ skill.id }>
          <h3> { skill.name } </h3>
          <p><strong> Level:</strong> { skill.level } </p>
          <p> { skill.details } </p>
          <button onClick= { this.handleDelete.bind(this, skill.id) }>Delete</button>
          //we need to bind this because we are not firing the function right now,
          //we are only firing it on click;
          //if we just included the skill.id it would invoke the function right away
        </div>
      )
    });

    return(
      <div>
        { skills }
      </div>
    )
  }
})
