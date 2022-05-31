
# Lightweight verification through generic examples

_Steven Ramsay_

A generic example is a generalisation of a test case
in which you can write variables as part of the test.  A simple
Haskell example is "map f [x1, x2, x3] = [f x1, f x2, f x3]".  Rather
than executing a test, we symbolically execute a generic example, and
this involves an algorithm that automatically constructs a simple
proof that the left-hand side evaluates to the right-hand side.  We
are currently building a prototype implementation of a generic
examples system for Haskell.  The system allows the programmer to
write generic examples as part of the comments in their program source
code and have them verified by the compiler automatically.  The goals
of this project are (i) to investigate how the system needs to be
extended (both in theory and practice) in order to be useful to
programmers with relatively little Haskell experience (ii) how to
teach generic examples both to inexperienced and experienced
programmers (iii) to define what generic examples could look like in
other programming languages (e.g. C or Rust).  It may not be obvious
from the "map" example why any teaching is required in goal (ii).
However, in general, one may need to also state assumptions on
properties of the unknowns (f, x1, x2 and x3).  For example, symbolic
execution of "quicksort [x1, x2, x3] = [x2, x1, x3]" will not succeed
unless we also know something about how x1, x2 and x3 interact with
the less than operator, e.g. an assumption like "x2 < x1 < x3".  For
this reason, constructing correct generic examples takes some skill
and thought on the part of the programmer, and so we want to know how
to give programmers a good mental model.

