import { useState, useEffect } from "react";
import React from 'react';
import { Button } from "react-bootstrap";
import { accountService } from '@/_services';

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  
  function LoadingButton() {
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
          accountService.logout();
        });
      }
    }, [isLoading]);
  
    const handleClick = () => setLoading(true);
  
    return (
      <Button
        style={{marginRight: "auto", marginLeft: "auto", width: "150px", marginTop: "auto", marginBottom: "auto"}}
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? 'Logging Out…' : 'Log Out'}
      </Button>
    );
  }
  

  export {LoadingButton};