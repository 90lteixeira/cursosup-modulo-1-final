class Fila {
 
	constructor(worker) {
	    this.worker = worker;
	    this.jobs = [];
	}

	get getJobs() {
		this.worker(this._getJobs());
	}

	get removeAllJobs() {
		this.worker(this._removeAllJobs());
	}

 	addJob = function (job) {
		this.worker(this._addJob(job));
	}   

	removeJob = function (id) {
		this.worker(this._removeJob(id));
	}   

	_getJobs = function () {
		return this.jobs; 
	};
	
	_addJob = function (job) {
 		return this.jobs.push(job); 
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

		return this.jobs;
	};

	_removeAllJobs = function () {
	 	return this.jobs = []; 
	};
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
fila.addJob(criarJob(
	'Delegadis gente finis, bibendum egestas augue arcu ut est. Quem num gosta di mé, boa gentis num é. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. '
)); 

fila.getJobs; 
 
setTimeout(() => {
	fila.removeJob(fila._getJobs()[1].id);  
	fila.removeAllJobs; 
}, 2000);