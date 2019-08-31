import merge from '../../node_modules/ramda/src/merge.js';
import sortBy from '../../node_modules/ramda/src/sortBy.js';
import compose from '../../node_modules/ramda/src/compose.js';
import toLower from '../../node_modules/ramda/src/toLower.js';
import prop from '../../node_modules/ramda/src/prop.js';
import reverse from '../../node_modules/ramda/src/reverse.js';
import mergeDeepLeft from '../../node_modules/ramda/src/mergeDeepLeft.js';


/*
import F from '../../node_modules/ramda/es/F.js';
import T from '../../node_modules/ramda/es/T.js';
import __ from '../../node_modules/ramda/es/__.js';
import add from '../../node_modules/ramda/es/add.js';
import addIndex from '../../node_modules/ramda/es/addIndex.js';
import adjust from '../../node_modules/ramda/es/adjust.js';
import all from '../../node_modules/ramda/es/all.js';
import allPass from '../../node_modules/ramda/es/allPass.js';
import always from '../../node_modules/ramda/es/always.js';
import and from '../../node_modules/ramda/es/and.js';
import any from '../../node_modules/ramda/es/any.js';
import anyPass from '../../node_modules/ramda/es/anyPass.js';
import ap from '../../node_modules/ramda/es/ap.js';
import aperture from '../../node_modules/ramda/es/aperture.js';
import append from '../../node_modules/ramda/es/append.js';
import apply from '../../node_modules/ramda/es/apply.js';
import applySpec from '../../node_modules/ramda/es/applySpec.js';
import applyTo from '../../node_modules/ramda/es/applyTo.js';
import ascend from '../../node_modules/ramda/es/ascend.js';
import assoc from '../../node_modules/ramda/es/assoc.js';
import assocPath from '../../node_modules/ramda/es/assocPath.js';
import binary from '../../node_modules/ramda/es/binary.js';
import bind from '../../node_modules/ramda/es/bind.js';
import both from '../../node_modules/ramda/es/both.js';
import call from '../../node_modules/ramda/es/call.js';
import chain from '../../node_modules/ramda/es/chain.js';
import clamp from '../../node_modules/ramda/es/clamp.js';
import clone from '../../node_modules/ramda/es/clone.js';
import comparator from '../../node_modules/ramda/es/comparator.js';
import complement from '../../node_modules/ramda/es/complement.js';
import compose from '../../node_modules/ramda/es/compose.js';
import composeK from '../../node_modules/ramda/es/composeK.js';
import composeP from '../../node_modules/ramda/es/composeP.js';
import composeWith from '../../node_modules/ramda/es/composeWith.js';
import concat from '../../node_modules/ramda/es/concat.js';
import cond from '../../node_modules/ramda/es/cond.js';
import construct from '../../node_modules/ramda/es/construct.js';
import constructN from '../../node_modules/ramda/es/constructN.js';
import contains from '../../node_modules/ramda/es/contains.js';
import converge from '../../node_modules/ramda/es/converge.js';
import countBy from '../../node_modules/ramda/es/countBy.js';
import curry from '../../node_modules/ramda/es/curry.js';
import curryN from '../../node_modules/ramda/es/curryN.js';
import dec from '../../node_modules/ramda/es/dec.js';
import defaultTo from '../../node_modules/ramda/es/defaultTo.js';
import descend from '../../node_modules/ramda/es/descend.js';
import difference from '../../node_modules/ramda/es/difference.js';
import differenceWith from '../../node_modules/ramda/es/differenceWith.js';
import dissoc from '../../node_modules/ramda/es/dissoc.js';
import dissocPath from '../../node_modules/ramda/es/dissocPath.js';
import divide from '../../node_modules/ramda/es/divide.js';
import drop from '../../node_modules/ramda/es/drop.js';
import dropLast from '../../node_modules/ramda/es/dropLast.js';
import dropLastWhile from '../../node_modules/ramda/es/dropLastWhile.js';
import dropRepeats from '../../node_modules/ramda/es/dropRepeats.js';
import dropRepeatsWith from '../../node_modules/ramda/es/dropRepeatsWith.js';
import dropWhile from '../../node_modules/ramda/es/dropWhile.js';
import either from '../../node_modules/ramda/es/either.js';
import empty from '../../node_modules/ramda/es/empty.js';
import endsWith from '../../node_modules/ramda/es/endsWith.js';
import eqBy from '../../node_modules/ramda/es/eqBy.js';
import eqProps from '../../node_modules/ramda/es/eqProps.js';
import equals from '../../node_modules/ramda/es/equals.js';
import evolve from '../../node_modules/ramda/es/evolve.js';
import filter from '../../node_modules/ramda/es/filter.js';
import find from '../../node_modules/ramda/es/find.js';
import findIndex from '../../node_modules/ramda/es/findIndex.js';
import findLast from '../../node_modules/ramda/es/findLast.js';
import findLastIndex from '../../node_modules/ramda/es/findLastIndex.js';
import flatten from '../../node_modules/ramda/es/flatten.js';
import flip from '../../node_modules/ramda/es/flip.js';
import forEach from '../../node_modules/ramda/es/forEach.js';
import forEachObjIndexed from '../../node_modules/ramda/es/forEachObjIndexed.js';
import fromPairs from '../../node_modules/ramda/es/fromPairs.js';
import groupBy from '../../node_modules/ramda/es/groupBy.js';
import groupWith from '../../node_modules/ramda/es/groupWith.js';
import gt from '../../node_modules/ramda/es/gt.js';
import gte from '../../node_modules/ramda/es/gte.js';
import has from '../../node_modules/ramda/es/has.js';
import hasIn from '../../node_modules/ramda/es/hasIn.js';
import hasPath from '../../node_modules/ramda/es/hasPath.js';
import head from '../../node_modules/ramda/es/head.js';
import identical from '../../node_modules/ramda/es/identical.js';
import identity from '../../node_modules/ramda/es/identity.js';
import ifElse from '../../node_modules/ramda/es/ifElse.js';
import inc from '../../node_modules/ramda/es/inc.js';
import includes from '../../node_modules/ramda/es/includes.js';
import indexBy from '../../node_modules/ramda/es/indexBy.js';
import indexOf from '../../node_modules/ramda/es/indexOf.js';
import init from '../../node_modules/ramda/es/init.js';
import innerJoin from '../../node_modules/ramda/es/innerJoin.js';
import insert from '../../node_modules/ramda/es/insert.js';
import insertAll from '../../node_modules/ramda/es/insertAll.js';
import intersection from '../../node_modules/ramda/es/intersection.js';
import intersperse from '../../node_modules/ramda/es/intersperse.js';
import into from '../../node_modules/ramda/es/into.js';
import invert from '../../node_modules/ramda/es/invert.js';
import invertObj from '../../node_modules/ramda/es/invertObj.js';
import invoker from '../../node_modules/ramda/es/invoker.js';
import is from '../../node_modules/ramda/es/is.js';
import isEmpty from '../../node_modules/ramda/es/isEmpty.js';
import isNil from '../../node_modules/ramda/es/isNil.js';
import join from '../../node_modules/ramda/es/join.js';
import juxt from '../../node_modules/ramda/es/juxt.js';
import keys from '../../node_modules/ramda/es/keys.js';
import keysIn from '../../node_modules/ramda/es/keysIn.js';
import last from '../../node_modules/ramda/es/last.js';
import lastIndexOf from '../../node_modules/ramda/es/lastIndexOf.js';
import length from '../../node_modules/ramda/es/length.js';
import lens from '../../node_modules/ramda/es/lens.js';
import lensIndex from '../../node_modules/ramda/es/lensIndex.js';
import lensPath from '../../node_modules/ramda/es/lensPath.js';
import lensProp from '../../node_modules/ramda/es/lensProp.js';
import lift from '../../node_modules/ramda/es/lift.js';
import liftN from '../../node_modules/ramda/es/liftN.js';
import lt from '../../node_modules/ramda/es/lt.js';
import lte from '../../node_modules/ramda/es/lte.js';
import map from '../../node_modules/ramda/es/map.js';
import mapAccum from '../../node_modules/ramda/es/mapAccum.js';
import mapAccumRight from '../../node_modules/ramda/es/mapAccumRight.js';
import mapObjIndexed from '../../node_modules/ramda/es/mapObjIndexed.js';
import match from '../../node_modules/ramda/es/match.js';
import mathMod from '../../node_modules/ramda/es/mathMod.js';
import max from '../../node_modules/ramda/es/max.js';
import maxBy from '../../node_modules/ramda/es/maxBy.js';
import mean from '../../node_modules/ramda/es/mean.js';
import median from '../../node_modules/ramda/es/median.js';
import memoizeWith from '../../node_modules/ramda/es/memoizeWith.js';
import merge from '../../node_modules/ramda/es/merge.js';
import mergeAll from '../../node_modules/ramda/es/mergeAll.js';
import mergeDeepLeft from '../../node_modules/ramda/es/mergeDeepLeft.js';
import mergeDeepRight from '../../node_modules/ramda/es/mergeDeepRight.js';
import mergeDeepWith from '../../node_modules/ramda/es/mergeDeepWith.js';
import mergeDeepWithKey from '../../node_modules/ramda/es/mergeDeepWithKey.js';
import mergeLeft from '../../node_modules/ramda/es/mergeLeft.js';
import mergeRight from '../../node_modules/ramda/es/mergeRight.js';
import mergeWith from '../../node_modules/ramda/es/mergeWith.js';
import mergeWithKey from '../../node_modules/ramda/es/mergeWithKey.js';
import min from '../../node_modules/ramda/es/min.js';
import minBy from '../../node_modules/ramda/es/minBy.js';
import modulo from '../../node_modules/ramda/es/modulo.js';
import move from '../../node_modules/ramda/es/move.js';
import multiply from '../../node_modules/ramda/es/multiply.js';
import nAry from '../../node_modules/ramda/es/nAry.js';
import negate from '../../node_modules/ramda/es/negate.js';
import none from '../../node_modules/ramda/es/none.js';
import not from '../../node_modules/ramda/es/not.js';
import nth from '../../node_modules/ramda/es/nth.js';
import nthArg from '../../node_modules/ramda/es/nthArg.js';
import o from '../../node_modules/ramda/es/o.js';
import objOf from '../../node_modules/ramda/es/objOf.js';
import of from '../../node_modules/ramda/es/of.js';
import omit from '../../node_modules/ramda/es/omit.js';
import once from '../../node_modules/ramda/es/once.js';
import or from '../../node_modules/ramda/es/or.js';
import otherwise from '../../node_modules/ramda/es/otherwise.js';
import over from '../../node_modules/ramda/es/over.js';
import pair from '../../node_modules/ramda/es/pair.js';
import partial from '../../node_modules/ramda/es/partial.js';
import partialRight from '../../node_modules/ramda/es/partialRight.js';
import partition from '../../node_modules/ramda/es/partition.js';
import path from '../../node_modules/ramda/es/path.js';
import pathEq from '../../node_modules/ramda/es/pathEq.js';
import pathOr from '../../node_modules/ramda/es/pathOr.js';
import pathSatisfies from '../../node_modules/ramda/es/pathSatisfies.js';
import pick from '../../node_modules/ramda/es/pick.js';
import pickAll from '../../node_modules/ramda/es/pickAll.js';
import pickBy from '../../node_modules/ramda/es/pickBy.js';
import pipe from '../../node_modules/ramda/es/pipe.js';
import pipeK from '../../node_modules/ramda/es/pipeK.js';
import pipeP from '../../node_modules/ramda/es/pipeP.js';
import pipeWith from '../../node_modules/ramda/es/pipeWith.js';
import pluck from '../../node_modules/ramda/es/pluck.js';
import prepend from '../../node_modules/ramda/es/prepend.js';
import product from '../../node_modules/ramda/es/product.js';
import project from '../../node_modules/ramda/es/project.js';
import prop from '../../node_modules/ramda/es/prop.js';
import propEq from '../../node_modules/ramda/es/propEq.js';
import propIs from '../../node_modules/ramda/es/propIs.js';
import propOr from '../../node_modules/ramda/es/propOr.js';
import propSatisfies from '../../node_modules/ramda/es/propSatisfies.js';
import props from '../../node_modules/ramda/es/props.js';
import range from '../../node_modules/ramda/es/range.js';
import reduce from '../../node_modules/ramda/es/reduce.js';
import reduceBy from '../../node_modules/ramda/es/reduceBy.js';
import reduceRight from '../../node_modules/ramda/es/reduceRight.js';
import reduceWhile from '../../node_modules/ramda/es/reduceWhile.js';
import reduced from '../../node_modules/ramda/es/reduced.js';
import reject from '../../node_modules/ramda/es/reject.js';
import remove from '../../node_modules/ramda/es/remove.js';
import repeat from '../../node_modules/ramda/es/repeat.js';
import replace from '../../node_modules/ramda/es/replace.js';
import reverse from '../../node_modules/ramda/es/reverse.js';
import scan from '../../node_modules/ramda/es/scan.js';
import sequence from '../../node_modules/ramda/es/sequence.js';
import set from '../../node_modules/ramda/es/set.js';
import slice from '../../node_modules/ramda/es/slice.js';
import sort from '../../node_modules/ramda/es/sort.js';
import sortBy from '../../node_modules/ramda/es/sortBy.js';
import sortWith from '../../node_modules/ramda/es/sortWith.js';
import split from '../../node_modules/ramda/es/split.js';
import splitAt from '../../node_modules/ramda/es/splitAt.js';
import splitEvery from '../../node_modules/ramda/es/splitEvery.js';
import splitWhen from '../../node_modules/ramda/es/splitWhen.js';
import startsWith from '../../node_modules/ramda/es/startsWith.js';
import subtract from '../../node_modules/ramda/es/subtract.js';
import sum from '../../node_modules/ramda/es/sum.js';
import symmetricDifference from '../../node_modules/ramda/es/symmetricDifference.js';
import symmetricDifferenceWith from '../../node_modules/ramda/es/symmetricDifferenceWith.js';
import tail from '../../node_modules/ramda/es/tail.js';
import take from '../../node_modules/ramda/es/take.js';
import takeLast from '../../node_modules/ramda/es/takeLast.js';
import takeLastWhile from '../../node_modules/ramda/es/takeLastWhile.js';
import takeWhile from '../../node_modules/ramda/es/takeWhile.js';
import tap from '../../node_modules/ramda/es/tap.js';
import test from '../../node_modules/ramda/es/test.js';
import then from '../../node_modules/ramda/es/then.js';
import times from '../../node_modules/ramda/es/times.js';
import toLower from '../../node_modules/ramda/es/toLower.js';
import toPairs from '../../node_modules/ramda/es/toPairs.js';
import toPairsIn from '../../node_modules/ramda/es/toPairsIn.js';
import toString from '../../node_modules/ramda/es/toString.js';
import toUpper from '../../node_modules/ramda/es/toUpper.js';
import transduce from '../../node_modules/ramda/es/transduce.js';
import transpose from '../../node_modules/ramda/es/transpose.js';
import traverse from '../../node_modules/ramda/es/traverse.js';
import trim from '../../node_modules/ramda/es/trim.js';
import tryCatch from '../../node_modules/ramda/es/tryCatch.js';
import type from '../../node_modules/ramda/es/type.js';
import unapply from '../../node_modules/ramda/es/unapply.js';
import unary from '../../node_modules/ramda/es/unary.js';
import uncurryN from '../../node_modules/ramda/es/uncurryN.js';
import unfold from '../../node_modules/ramda/es/unfold.js';
import union from '../../node_modules/ramda/es/union.js';
import unionWith from '../../node_modules/ramda/es/unionWith.js';
import uniq from '../../node_modules/ramda/es/uniq.js';
import uniqBy from '../../node_modules/ramda/es/uniqBy.js';
import uniqWith from '../../node_modules/ramda/es/uniqWith.js';
import unless from '../../node_modules/ramda/es/unless.js';
import unnest from '../../node_modules/ramda/es/unnest.js';
import until from '../../node_modules/ramda/es/until.js';
import update from '../../node_modules/ramda/es/update.js';
import useWith from '../../node_modules/ramda/es/useWith.js';
import values from '../../node_modules/ramda/es/values.js';
import valuesIn from '../../node_modules/ramda/es/valuesIn.js';
import view from '../../node_modules/ramda/es/view.js';
import when from '../../node_modules/ramda/es/when.js';
import where from '../../node_modules/ramda/es/where.js';
import whereEq from '../../node_modules/ramda/es/whereEq.js';
import without from '../../node_modules/ramda/es/without.js';
import xprod from '../../node_modules/ramda/es/xprod.js';
import zip from '../../node_modules/ramda/es/zip.js';
import zipObj from '../../node_modules/ramda/es/zipObj.js';
import zipWith from '../../node_modules/ramda/es/zipWith.js';
import thunkify from '../../node_modules/ramda/es/thunkify.js';
*/

export {
    merge , sortBy, compose, toLower, prop, reverse, mergeDeepLeft
};