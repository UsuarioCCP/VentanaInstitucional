import './styles.css'
import { Snowfall } from '../Snowfall/Snowfall';

const Layout = ({ children }) => {
    return(
        <div className="flex flex-col">
            <Snowfall snowflakeCount={200} flakeSize={10} fallSpeed={20} flakeColor="#FFFFFF" />
            { children }
        </div>
    )
};

export default Layout