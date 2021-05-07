class ApiConfig{
    static getApiDomain(){
        // return 'http://182.16.87.218' 
        // return 'http://182.16.93.130'
        // return 'http://180.178.34.130'
        // return 'http://103.85.22.225'
        // return 'http://150.129.82.179'
        // return 'https://api.aotaiex.com'
        // return 'http://143.92.61.175:8099'
        return 'http://216.83.53.142:8099'
    }
    static getWSDomain(){
        const sid = Date.parse(new Date()) + this.randomCoding()
        return 'ws://216.83.53.142:8099/websocket/'+sid+'/999'
    }
    static randomCoding(){
		let arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
		let idvalue ='';
		for(let i=0;i<4;i++){
		    idvalue+=arr[Math.floor(Math.random()*26)];
		}
		return idvalue;
	}
}

export default ApiConfig