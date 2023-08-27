import React from 'react'
import { ClickCounter } from '../components/step5-render-props-pattern/ClickCounter'
// import { ClickHover } from '../components/step5-render-props-pattern/ClickHover'
import { User } from '../components/step5-render-props-pattern/User'
import { ClickHover } from '../components/step5-render-props-pattern/ClickHover'

export const RenderPropsTesting = () => {
  return (
    <div>
        <User render={(count, incrementCount) => <ClickCounter count={count} incrementCount={incrementCount}></ClickCounter>} />
        <User render={(count, incrementCount) => <ClickHover count={count} incrementCount={incrementCount}></ClickHover>} />
        {/* <User>
            {
                (count, incrementCount) => <ClickCounter count={count} incrementCount={incrementCount}></ClickCounter>
            }
        </User>

        <User>
            {
                (count, incrementCount) => <ClickHover count={count} incrementCount={incrementCount}></ClickHover>
            }
        </User> */}
    </div>
  )
}
