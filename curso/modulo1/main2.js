class Fila {
 
	constructor(worker) {
	    this.worker = worker;
	    this.jobs = [];
	}

	get getJobs() {
 		this._getJobs();
	}

	get removeAllJobs() {
 		this._removeAllJobs();
	}

 	addJob = function (job) {
 		this._addJob(job); 
	}

	removeJob = function (id) {
 		this._removeJob(id);
	}   

	_getJobs = function () {
		this.processaFila(this.jobs);
	};
	
	_addJob = function (job) {
 		this.jobs.push(job); 
 		this.processaFila(job);
	};

	_removeJob = function (id) {
		if (!id) {
			throw "Job não informado.";
		} 

		let jobs = this.jobs;
		jobs.forEach(function(item, key) {
			if (item.id === id) { 
			 	jobs.splice(key, 1); 
			 	return;
			}
		});  
		this.processaFila();
	};

	_removeAllJobs = function () {
  		this.jobs = [];
  		this.processaFila();
	};

	processaFila(job) {
		this.worker(job).then(() => {
			this.jobs.shift();
			if (this.jobs.lenght > 0) {
				this.processaFila(job);
			}
		});
	}
}
 
function myWorker(_job) {
	return new Promise(resolve => { 
		setTimeout(() => { 
			console.log(_job); 
			resolve();
		}, 1000);
	})
}

const criarJob = function (body) {
	let uniqid = (Date.now().toString(36) + Math.random().toString(36).substr(2, 9)).toUpperCase();
	return {
		id: uniqid,
		payload: {
			filename: uniqid + '.txt',
			body: body
		}
	}
}; 
 
const fila = new Fila(myWorker); 

fila.addJob(criarJob(
	'Cevadis im ampola pa arma uma pindureta. Viva Forevis aptent taciti sociosqu ad litora torquent. Mé faiz elementum girarzis, nisi eros vermeio. Paisis, filhis, espiritis santis. '
)); 

fila.addJob(criarJob(
	'Aenean aliquam molestie leo, vitae iaculis nisl. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Sapien in monti palavris qui num significa nadis i pareci latim. Manduma pindureta quium dia nois paga. '
)); 
