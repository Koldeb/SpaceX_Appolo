import React from 'react'

export function MissionKey(){
  return(
      <div className="my-3">
        <p>
            <span className="px-3 mr-3 bg-success"/>= Success 
        </p>
          <p>
              <span className="px-3 mr-3 bg-danger" />= Fail
        </p>
      </div>
  )
}

export default MissionKey
