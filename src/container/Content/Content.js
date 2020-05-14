import React from 'react';
import './Content.scss';
import Subject from '../Subject/Subject';
import Output from '../Output/Output';

function Content() {
  return (
    <div className="content">
		<div className="container-fluid">
	      <div className="row">
	      	<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<Subject />
	      	</div>
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<Output />
			</div>
	      </div>
	    </div>
    </div>
  );
}

export default Content;