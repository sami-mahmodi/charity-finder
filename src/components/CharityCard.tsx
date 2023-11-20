type Charity = {
  orgName: String,
  orgAddress:String,
  orgEmail:String
}




function CharityCard({orgName,orgAddress,orgEmail}: Charity) {
  return (
    <div className='w-400 h-400'>
      <span>{orgName}</span>
      <span>{orgEmail}</span>
      <span>{orgAddress}</span>
    </div>
  )
}

export default CharityCard