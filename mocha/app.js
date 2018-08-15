/**
 * Created by Administrator on 2018/8/15.
 */
const {should,expect,assert}=require('chai');

function add(...args){
    return args.reduce(function (a,b) {
        return a+b;
    });
}
function add_1(a,b){
    return a+b;
}
/*
should();
describe('add',()=>{
    it('should return 5 when 2+3',()=>{
        expect(add(2,3),5);
    });
    it('should return function when add',()=>{
        //assert.equal(add(2,-3),5);
        //assert.typeOf(add,'string','add is a function');
        //assert.typeOf({name:1},"Object");
        //assert.ok(true);
        [1,2,3].indexOf(5).should.equal(-1);
    });
});*/

var Benchmark=require('benchmark');
var fs=require('fs');
var suite = new Benchmark.Suite;
var arr=[0,1,2,3];
var arr1=[];
var arr2=[];
// add tests
suite.add('add', function() {
        add(3,4);
    })
    .add('add1', function() {
        add_1(3,4);
    })
    // add listeners
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });
