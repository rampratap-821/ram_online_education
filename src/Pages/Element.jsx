import React from 'react'
import Elements from '../Element/Elements'
import ForCourse from '../Element/ForCourse'
import ForLayout from '../Element/ForLayout'
import ForDesign from '../Element/ForDesign'
import PrebuiltPages from '../Element/PreBuiltPage'
import Card from '../Element/Card'

const Element = () => {
  return (
    <div>
      <Elements/>
      <ForCourse/>
      <ForLayout/>
      <ForDesign/>
      <PrebuiltPages/>
      <Card/>
    </div>
  )
}

export default Element
