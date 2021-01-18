const sha1 = require('sha1');

const [, , ...message] = process.argv;

const joinedMessage = message.join(''); // join input

const fullEncrypted = sha1(joinedMessage); // encrypt joined input

// Array to push concated code
const result = [];

// Iterate if input less than encrypt
if (joinedMessage.length <= fullEncrypted.length) {
	for (let i = 0; i < joinedMessage.length; i++) {
		let concated = joinedMessage[i] + fullEncrypted[i];
		result.push(concated);
	}

	console.log(result.join(''));
}
// Iterate if encrypt less than input
else {
	for (let j = 0; j < joinedMessage.length; j++) {
		// Concat as usual until fulecrypte reaches end
		if (j < fullEncrypted.length) {
			let concated = joinedMessage[j] + fullEncrypted[j];
			result.push(concated);
		}
		// Concat from the beginning of encrypt
		else {
			let concated =
				joinedMessage[j] + fullEncrypted[j - fullEncrypted.length];
			result.push(concated);
		}
	}

	console.table(result);
}
