import * as ts from 'typescript';
import * as ts24 from './typescripts/typescript-2.4';

export {
  TypeElement, 
  createPropertySignature, 
  createTypeReferenceNode, 
  createIdentifier, 
  createToken, 
  SyntaxKind, 
  createArrayTypeNode, 
  createKeywordTypeNode,
  createTypeLiteralNode,
  Decorator,
  Diagnostic,
  ObjectLiteralElementLike, 
  createPropertyAssignment,
  CallExpression,
  Expression,
  createArrayLiteral,
  DiagnosticCategory,
  createObjectLiteral,
  ObjectLiteralExpression,
  createProperty,
  ClassElement,
  Identifier,
  NodeArray,
  PropertyDeclaration,
  setTextRange,
  createNodeArray,
  TypeChecker,
  TransformationContext,
  Transformer,
  SourceFile,
  Visitor,
  Node,
  ClassDeclaration,
  getMutableClone,
  TypeNode,
  getLeadingCommentRanges,
  ConstructorDeclaration,
  SymbolFlags,
  NamedDeclaration,
  Symbol,
  Declaration,
  ImportDeclaration,
  forEachChild,
  NamedImports,
  ExpressionStatement,
  StringLiteral,
  VariableStatement,
  PropertyAccessExpression,
  createSourceFile,
  ScriptTarget,
  SynthesizedComment,
  getSyntheticTrailingComments,
  addSyntheticTrailingComment,
  CompilerOptions,
  parseCommandLine,
  readConfigFile,
  parseJsonConfigFileContent,
  sys,
  WriteFileCallback,
  createCompilerHost,
  createProgram,
  getPreEmitDiagnostics,
  ModuleKind,
  EntityName,
  isIdentifier,
  TransformerFactory,
  NodeFlags,
  visitEachChild,
  setOriginalNode,
  Token,
  CustomTransformers,
  ExportDeclaration,
  getOriginalNode,
  setSyntheticLeadingComments,
  getSyntheticLeadingComments,
  ModifierFlags,
  setSourceMapRange,
  Block,
  updateBlock,
  setEmitFlags,
  EmitFlags,
  PropertyName,
  getTrailingCommentRanges,
  setSyntheticTrailingComments,
  Statement,
  CommentRange,
  getLineAndCharacterOfPosition,
  createNotEmittedStatement,
  NotEmittedStatement,
  visitLexicalEnvironment,
  flattenDiagnosticMessageText,
  getCombinedModifierFlags,
  ParameterDeclaration,
  SignatureDeclaration,
  TypeReference,
  ClassLikeDeclaration,
  InterfaceDeclaration,
  Type,
  TypeAliasDeclaration,
  ModuleResolutionHost,
  VariableDeclaration,
  FunctionLikeDeclaration,
  EnumDeclaration,
  AssertionExpression,
  NonNullExpression,
  TypeFlags,
  UnionType,
  PropertyAssignment,
  ElementAccessExpression,
  __String,
  resolveModuleName,
  ImportSpecifier,
  ExportSpecifier,
  MethodDeclaration,
  GetAccessorDeclaration,
  SetAccessorDeclaration,
  ModuleDeclaration,
  ModuleBlock,
  ImportEqualsDeclaration,
  FunctionDeclaration,
  DeclarationStatement,
  PropertySignature,
  EmitResult,
  Program,
  CompilerHost,
  CancellationToken,
  DeclarationWithTypeParameters,
} from 'typescript';

export function getEmitFlags(node: ts.Node): ts.EmitFlags | undefined {
  // tslint:disable-next-line:no-any TS 2.5 typescript.d.ts does not expose getEmitFlags.
  return (ts as any).getEmitFlags(node);
}

// Between TypeScript 2.4 and 2.5 updateProperty was modified. If called with 2.4 re-order the parameters.
export let updateProperty = ts.updateProperty;

let [major, minor] = ts.version.split('.');
if (major === '2' && minor == '4') {
  const updateProperty24 = ts.updateProperty as any as typeof ts24.updateProperty;
  updateProperty = (node: ts.PropertyDeclaration, decorators: ReadonlyArray<ts.Decorator> | undefined, 
    modifiers: ReadonlyArray<ts.Modifier> | undefined, name: string | ts.PropertyName, questionToken: ts.QuestionToken | undefined, type: ts.TypeNode | undefined, initializer: ts.Expression | undefined): ts.PropertyDeclaration => {
      return updateProperty24(node as any as ts24.PropertyDeclaration, decorators as any as ts24.Decorator[], modifiers as any, name as any, type as any, initializer as any) as any;
  };
}