let jobs = [];

const Fila = function () {

	const _addJob = function (job) {
 		jobs.push(job); 
	};

	const _removeJob = function (id) {
		if (!id) {
			throw "Job não informado.";
		} 

		jobs.forEach(function(item, key) { 
			if (item.id === id) { 
				jobs.splice(key, 1);  
				return;
			}
		}); 
		 
	};

	const _removeAllJobs = function () {
		jobs = []; 
	};

	const _getJobs = function () {
		return jobs; 
	};  

	return {
		addJob : _addJob,
		removeJob : _removeJob,
		removeAllJobs : _removeAllJobs,
		getJobs : _getJobs
	};
};

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
 
console.log(Fila().getJobs());

Fila().addJob(criarJob(
	'Cevadis im ampola pa arma uma pindureta. Viva Forevis aptent taciti sociosqu ad litora torquent. Mé faiz elementum girarzis, nisi eros vermeio. Paisis, filhis, espiritis santis. '
));

Fila().addJob(criarJob(
	'Aenean aliquam molestie leo, vitae iaculis nisl. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Sapien in monti palavris qui num significa nadis i pareci latim. Manduma pindureta quium dia nois paga. '
));

Fila().addJob(criarJob(
	'Delegadis gente finis, bibendum egestas augue arcu ut est. Quem num gosta di mé, boa gentis num é. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. '
));  
console.log(Fila().getJobs());

Fila().removeJob(jobs[1].id); 
console.log(Fila().getJobs());

Fila().removeAllJobs(); 
console.log(Fila().getJobs());
