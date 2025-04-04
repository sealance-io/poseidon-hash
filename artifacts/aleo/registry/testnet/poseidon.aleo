program poseidon.aleo;

function point_ops:
    input r0 as scalar.private;
    mul r0 group::GEN into r1;
    output r1 as group.public;

function hash8:
    input r0 as field.private;
    hash.psd8 r0 into r1 as field;
    output r1 as field.public;

function hash2:
    input r0 as field.private;
    hash.psd2 r0 into r1 as field;
    output r1 as field.public;

function hash4:
    input r0 as field.private;
    hash.psd4 r0 into r1 as field;
    output r1 as field.public;

function hash_two_elements:
    input r0 as field.private;
    input r1 as field.private;
    cast  r0 r1 into r2 as [field; 2u32];
    hash.psd8 r2 into r3 as field;
    output r3 as field.public;
