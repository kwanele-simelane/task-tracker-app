
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <h5>Built with love by: <Link to='#'></Link></h5>

            <Link to='/'>Go to Home</Link>
        </div>
    )
}

export default About
