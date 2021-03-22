import React from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';

const tablePage = (props) => {
  const data_panel = {
    columns: [
      {
        'label': <MDBInput label=" " type="checkbox" id="checkbox5" />,
        'field': 'check',
        'sort': 'asc'
      },
      {
        'label': 'First Name',
        'field': 'first',
        'sort': 'asc'
      },
      {
        'label': 'Last Name',
        'field': 'last',
        'sort': 'asc'
      },
      {
        'label': 'Username',
        'field': 'username',
        'sort': 'asc'
      },
      {
        'label': 'Username',
        'field': 'username2',
        'sort': 'asc'
      },
      {
        'label': 'Username',
        'field': 'username3',
        'sort': 'asc'
      },
      {
        'label': 'Username',
        'field': 'username4',
        'sort': 'asc'
      }
    ],
    rows: [
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox6" />,
        'first': 'Mark',
        'last': 'Otto',
        'username': '@mdo',
        'username2': 'Mark',
        'username3': 'Otto',
        'username4': '@mdo'
      },
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox7" />,
        'first': 'Jacob',
        'last': 'Thornton',
        'username': '@fat',
        'username2': 'Jacob',
        'username3': 'Thornton',
        'username4': '@fat'
      },
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox8" />,
        'first': 'Larry',
        'last': 'the Bird',
        'username': '@twitter',
        'username2': 'Larry',
        'username3': 'the Bird',
        'username4': '@twitter'
      },
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox9" />,
        'first': 'Paul',
        'last': 'Topolski',
        'username': '@P_Topolski',
        'username2': 'Paul',
        'username3': 'Topolski',
        'username4': '@P_Topolski'
      },
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox10" />,
        'first': 'Larry',
        'last': 'the Bird',
        'username': '@twitter',
        'username2': 'Larry',
        'username3': 'the Bird',
        'username4': '@twitter'
      }
    ]
  };

  return(
    <MDBCard narrow>
      <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
        <div>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-th-large mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-columns mt-0"></i>
          </MDBBtn>
        </div>
        <a href="#" className="white-text mx-3">Table name</a>
        <div>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fas fa-pencil-alt mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fas fa-times mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-info-circle mt-0"></i>
          </MDBBtn>
        </div>
      </MDBCardHeader>
      <MDBCardBody cascade>
        <MDBTable btn fixed>
          <MDBTableHead columns={data_panel.columns} />
          <MDBTableBody rows={data_panel.rows} />
        </MDBTable>
      </MDBCardBody>
    </MDBCard>
  );
};

export default tablePage;