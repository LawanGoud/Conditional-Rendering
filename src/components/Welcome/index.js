import './index.css'

const Welcome = props => {
  const {name, greeting} = props
  return (
    <h1 className="message">
      {greeting}, {name}
    </h1>
  )
}

Welcome.defaultProps = {
  name: 'LawanGoud',
  greeting: 'Hello',
}
export default Welcome
