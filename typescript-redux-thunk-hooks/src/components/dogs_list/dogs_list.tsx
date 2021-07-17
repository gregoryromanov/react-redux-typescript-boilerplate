import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors, actionCreators } from '../../redux/dogs';

const s = { padding: '5px', marginBottom: '20px' };

const DogsList: React.FC = () => {
  const dogs = useSelector(selectors.getDogsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.getDogs());
  }, []);

  const renderDogs = (): JSX.Element[] =>
    dogs.map(({ name, list }) => (
      <div className="blue" style={s}>
        <h5>Breed: {name}</h5>
        <div>
          {list.map((subBreed) => (
            <span key={subBreed}> {subBreed} </span>
          ))}
        </div>
      </div>
    ));

  const content = (dogs.length && renderDogs()) || 'No dogs';

  return (
    <div>
      <div className="row">
        <div className="col s12 m6">
          <div className="card">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default DogsList;
