import React, { useEffect, useState } from 'react';
import { MainScreen } from '@/mainscreen'
import { accountService } from '@/_services';

function LogWorkout() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const user = accountService.userValue;
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("http://localhost:4000/api/workouts")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <MainScreen>
          {items.map(item => (
            <li key={item.workout_id}>
                {1 == user.id &&  
                <h3>{(item.session_date).toString().split("T00:00:00")}</h3>
                }
              
            </li>
            
          ))}
        </MainScreen>
      );

    }
  }

  export { LogWorkout }