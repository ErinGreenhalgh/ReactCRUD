var AllSkills = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id)
  },
  //need to make this method, otherwise we get an error warning that
  //React component methods may only be bound to the component instance.

  render() {
    var skills = this.props.skills.map((skill) => {
      return (
        <div key={ skill.id }>
          <h3> { skill.name } </h3>
          <p><strong> Level:</strong> { skill.level } </p>
          <p> { skill.details } </p>
          <button onClick= { this.handleDelete.bind(this, skill.id) }>Delete</button>
          // <button onClick= { this.props.handleDelete.bind(this, skill.id) }>Delete</button>
          // if we do this, we get the error because we are binding to ...?
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
