
import './../App.css';

export default function InfoCard  ({ title, description, bgClass } : { title : string, description :  string, bgClass : string })  {
  return (
    <div className={`info-card ${bgClass}`}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

