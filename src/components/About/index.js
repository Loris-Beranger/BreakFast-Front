// == Import
import './styles.scss';

import sly from 'src/components/About/images/ratonlaveur.png'
import superman from 'src/components/About/images/Superman.jpg'
import batman from 'src/components/About/images/batman.jpg'
import harley from 'src/components/About/images/harley.png'
import wonder from 'src/components/About/images/wonderWoman.jpg'
import deadpool from 'src/components/About/images/deadpool.jpg'



// == Composant
const About = () => (
  <div className="about">
    <div className='front' >
    <h1>Team Front :</h1>
      <div className='Personne' >
        <img  src={wonder}  alt='pp'/>
        <h2>Karen Maciel</h2>
        <h3>Référent Technique</h3>
      </div>
      <div className='Personne' >
        <img  src={deadpool} className='deadpool' style={{'width':'100px','margin-left':'50px','margin-right':'50px'}} alt='pp'/>
        <h2>Loris Beranger</h2>
        <h3>Lead Dev Front</h3>
      </div>
      <div className='Personne' >
        <img  src={sly} className='sly' alt='idk'/>
        <h2>Mathys Vitiello</h2>
        <h3>Git Master</h3>
        </div>
      </div>

      <div className='back' >
      <h1>Team Back :</h1>
      <div className='Personne' >
        <img src={harley} className="harley" alt='pp'/>
        <h2>Alexandra Gonçalves</h2>
        <h3>Lead Dev Back / Scrum Master</h3>
      </div>
      <div className='Personne' >
        <img  src={batman} className='batman' alt='pp'/>
        <h2>Anthony Ouzhènes</h2>
        <h3>Product Owner</h3>
      </div>
    </div>
  </div>
);

// == Export
export default About;
