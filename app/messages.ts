import * as _ from 'lodash';

module Project {
    export class Messages {
        static getStandardMessage() {
            return _.join(['Hello', 'webpack', 'typescript', 2 ** 2], ' ');
        }

        static getCssMessage(){
            return _.join(['Hello', 'webpack', 'typescript', 'css', 2 ** 2], ' ');
        }

        static getSassMessage(){
            return _.join(['Hello', 'webpack', 'typescript', 'sass', 2 ** 2], ' ');
        }
    }
}
export default Project.Messages;