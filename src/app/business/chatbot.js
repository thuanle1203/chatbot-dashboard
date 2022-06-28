import React, { useEffect, useState, useRef } from 'react';
import categoryApi from '../../api/categoryApi';

function ChatbotEmbedded() {
  const { businessId } = JSON.parse(localStorage.getItem('user'))
  const [categoryList, setCategoryList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [copySuccess, setCopySuccess] = useState('');
  const [script, setScript] = useState('');
  const textAreaRef = useRef(null);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const div = "<div class=\"reddit_widget\" business-id=\"" + businessId + "\"></div>"
    const script1 = "<script src=\"https://www.paypal.com/sdk/js?currency=SGD&client-id=AamS8eRlRx9Wd3b2rEmDop36WrEVEllImmJijgea8fAf7ln9iqbuyJQwbiZpQbUMuCzsNLwNsIKe6iSV\"></script>"
    const link = "<link href=\"https://thuanle1203.github.io/docs/index.css\" rel=\"stylesheet\" />"
    const script2 = "<script src=\"https://thuanle1203.github.io/docs/index.js\"></script>"
    
    setScript(
      div + '\n' + script1 + '\n' + link + '\n' + script2
    )
  }, [isLoading]);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  };

  return (
    <div>

      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white mr-2">
          <i className="mdi mdi-home"></i>
          </span> Chatbot Embedded
        </h3>
      </div>  

      <div className="row">
				<div className="col-12 grid-margin">
					<div className="card">
						<div className="card-body">
							<h4 className="card-title">Embedded script</h4>
							<div className="table-responsive">
                <textarea type="text" value={script} id="script" ref={textAreaRef} />
                <div>
                  <button className={'mt-2 btn btn-rounded btn-fw ' + (copySuccess ? 'btn-gradient-light disable' : 'btn-gradient-success')} onClick={copyToClipboard}>{ copySuccess ? 'Copied' : 'Copy'}</button> 
                </div>							
              </div>
						</div>
					</div>
				</div>
			</div>
    </div>
  ) 
}


export default ChatbotEmbedded;