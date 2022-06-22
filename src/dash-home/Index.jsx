import React, { useEffect } from 'react'
import { accountService } from '@/_services';

import { MainScreen } from '@/mainscreen'
import { SmallContainer } from '@/smcontainer';
import { MediumContainer } from '@/mdcontainer';
import { LargeContainer } from '@/lgcontainer';
import { SmallSection } from '@/smsection';
import { LargeSection } from '@/lgsection';
import { ChartThing } from '@/charts';
import { TopContainer } from '../topcontainer/topcontainer';


function DashHome({ history }) {

    useEffect(() => {
        // redirect to home if already logged in
        if (!accountService.userValue) {
            history.push('/');
        }
    }, []);
    
  return (
    <MainScreen>
        <TopContainer></TopContainer>
        <LargeContainer>
            <LargeSection>
                <ChartThing></ChartThing>
            </LargeSection>
            <SmallSection>
            </SmallSection>
        </LargeContainer>
        <SmallContainer>
            <LargeSection>
            </LargeSection>
            <SmallSection></SmallSection>
            <SmallSection>
            </SmallSection>
        </SmallContainer> 
        <SmallContainer>
            <LargeSection></LargeSection>
        </SmallContainer>
        <MediumContainer>
            <LargeSection>
            {/* <iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJOyJeUjnPJIgR3zYCsZQJxN0&key=AIzaSyC6HtVgOE6ptpcNH_qcJfphWCF93TN5OgM%22%3E"></iframe> */}
            </LargeSection>
            <LargeSection>
            </LargeSection>
            <LargeSection>
            </LargeSection>
        </MediumContainer>
    </MainScreen>
  )
}

export { DashHome }