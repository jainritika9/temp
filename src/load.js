import React, { useEffect, useState } from "react";
import { Segment ,Button,Menu,Input,Container,Select,Sticky,Dropdown,Pagination, List, Grid,Image, GridColumn, DropdownItem} from "semantic-ui-react";

const option = [
  { key: 'all', text: 'All', value: 'all' },
  { key: 'articles', text: 'Articles', value: 'articles' },
  { key: 'products', text: 'Products', value: 'products' },
]
const options = [
  {
    "title": "Schiender Electric",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_XOWAIsu0URDiCsXAOh56rWdxuHjt5NKO-g&usqp=CAU",
    'category':"Switch Gear",
    "Specifications":'220 V/6A',
    "partno": "12323",
  },
  
   {
    "title": "Schiender Electric",
    
    "image": "https://gesrepair.com/wp-content/uploads/shutterstock_564137794-1024x683.jpg",
    'category':"Switch Gear",
    "Specifications":'220 V/6A',
    "partno": "11323"
  },
  
  {
    "title": "Typhon Elite",
    
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSduag1Pi3fPClQDL0SSyDbmY1uRYB4WcK8rQ&usqp=CAU",
    'category':"Switch Gear",
    "Specifications":'220 V/6A',
    "partno": "12322"
  },
  {
    "title": "Schiender Electric",
    
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV45PvDdi7EjL8vKRdxKwZsgQqL1U3R1lcpw&usqp=CAU",
    'category':"Switch Gear",
    "Specifications":'220 V/6A',
    "partno": "12313"
  },
 
];

function Sider() {
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    setFilteredResults(
      options.filter((option) =>
        option.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);
  return (
    <div>
    <Segment attached='bottom' tertiary inverted color='teal' id="main" style={{minHeight:980,fontSize:15 }}>
      <Container textAlign='center'>
        <Menu style={{borderRadius:20}}>
         <Select placeholder='Select your country' options={option} style={{border:'none',marginLeft:12}} />
      <Input type='text' placeholder='Search...'  onChange={(event) => setSearch(event.target.value)}  style={{paddingLeft:15,width:900}} action>
      <input style={{border:'none'}}/>
       <Button type='submit'>Search</Button>
       </Input>
       </Menu>
       </Container>
     <Container left>
     <header style={{padding:10,color:'black',fontSize:18}}>Search Results </header>
     <div style={{minHeight:700}}><List>
        {filteredResults.map((option, id) => (
          <List.Item key={id}><div style={{backgroundColor:"whitesmoke",borderRadius:5,fontFamily:'revert' ,color:'black',padding:15,margin:6,height:180}}>
              <Grid>
                  <Grid.Row>
                      <Grid.Column width={3}>
                          <Image src={option.image} style={{height:150,width:190}} size='medium'/>
                      </Grid.Column>
                      <Grid.Column width={11} >
                          <p style={{fontSize:18}}><b>{option.title}, Part Number {option.partno} ,Category: {option.category}, Sepcifications: {option.Specifications}</b></p>
                          <p style={{marginTop:30}}><b>Location:</b>Udaipur,Batch NA,Expected Clearance <br/>
                          <b>Price:</b> Quqntiy:12 <br/>
                          Stocked with Authorised Distributors/OEM/<br/><b>Verified:</b></p>
                          
                      </Grid.Column>
                      <Grid.Column width={2}>
                          <Button color='teal' style={{borderRadius:20, fontSize:14,padding:10,marginTop:120,width:130,float:'right'}}>  CONTACT  </Button>
                      </Grid.Column>
                  </Grid.Row>
              </Grid>
              </div></List.Item>
        ))}
        </List>
      </div>
      <footer >
    <Container textAlign='center' style={{margin:8}}>
      <Sticky>
      <Pagination
       boundaryRange={0}
       defaultActivePage={1}
       ellipsisItem={null}
       firstItem={null}
       lastItem={null}
       siblingRange={1}
       totalPages={5}
       />  
      </Sticky></Container></footer>
    </Container>
    </Segment>
    </div>
  );
}
export default Sider;