program poseidon_4.aleo;

function main:
    input r0 as u32.public;
    input r1 as u32.private;
    add r0 r1 into r2;
    output r2 as u32.private;

function hash:
    input r0 as field.private;
    hash.psd4 r0 into r1 as field;
    output r1 as field.public;

function hash_two_elements:
    input r0 as field.private;
    input r1 as field.private;
    cast  r0 r1 into r2 as [field; 2u32];
    hash.psd4 r2 into r3 as field;
    output r3 as field.public;
