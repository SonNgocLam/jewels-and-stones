import React from 'react';
import './Content.scss';
import Subject from '../Subject/Subject';

function Content() {
  return (
    <div className="content">
		<div className="container-fluid">
	      <div className="row">
	      	<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<Subject />
	      	</div>
	      </div>
	    </div>
    </div>
  );
}

export default Content;