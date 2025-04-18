
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Egresso
 * 
 */
export type Egresso = $Result.DefaultSelection<Prisma.$EgressoPayload>
/**
 * Model TrabalhoAtual
 * 
 */
export type TrabalhoAtual = $Result.DefaultSelection<Prisma.$TrabalhoAtualPayload>
/**
 * Model Instituicao
 * 
 */
export type Instituicao = $Result.DefaultSelection<Prisma.$InstituicaoPayload>
/**
 * Model Curso
 * 
 */
export type Curso = $Result.DefaultSelection<Prisma.$CursoPayload>
/**
 * Model Pessoa
 * 
 */
export type Pessoa = $Result.DefaultSelection<Prisma.$PessoaPayload>
/**
 * Model Matricula
 * 
 */
export type Matricula = $Result.DefaultSelection<Prisma.$MatriculaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Egressos
 * const egressos = await prisma.egresso.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Egressos
   * const egressos = await prisma.egresso.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.egresso`: Exposes CRUD operations for the **Egresso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Egressos
    * const egressos = await prisma.egresso.findMany()
    * ```
    */
  get egresso(): Prisma.EgressoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trabalhoAtual`: Exposes CRUD operations for the **TrabalhoAtual** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrabalhoAtuals
    * const trabalhoAtuals = await prisma.trabalhoAtual.findMany()
    * ```
    */
  get trabalhoAtual(): Prisma.TrabalhoAtualDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instituicao`: Exposes CRUD operations for the **Instituicao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instituicaos
    * const instituicaos = await prisma.instituicao.findMany()
    * ```
    */
  get instituicao(): Prisma.InstituicaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curso`: Exposes CRUD operations for the **Curso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursos
    * const cursos = await prisma.curso.findMany()
    * ```
    */
  get curso(): Prisma.CursoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pessoa`: Exposes CRUD operations for the **Pessoa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pessoas
    * const pessoas = await prisma.pessoa.findMany()
    * ```
    */
  get pessoa(): Prisma.PessoaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matricula`: Exposes CRUD operations for the **Matricula** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matriculas
    * const matriculas = await prisma.matricula.findMany()
    * ```
    */
  get matricula(): Prisma.MatriculaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Egresso: 'Egresso',
    TrabalhoAtual: 'TrabalhoAtual',
    Instituicao: 'Instituicao',
    Curso: 'Curso',
    Pessoa: 'Pessoa',
    Matricula: 'Matricula'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "egresso" | "trabalhoAtual" | "instituicao" | "curso" | "pessoa" | "matricula"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Egresso: {
        payload: Prisma.$EgressoPayload<ExtArgs>
        fields: Prisma.EgressoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EgressoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EgressoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EgressoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EgressoPayload>
          }
          findFirst: {
            args: Prisma.EgressoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EgressoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EgressoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EgressoPayload>
          }
          findMany: {
            args: Prisma.EgressoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EgressoPayload>[]
          }
          create: {
            args: Prisma.EgressoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EgressoPayload>
          }
          createMany: {
            args: Prisma.EgressoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EgressoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EgressoPayload>
          }
          update: {
            args: Prisma.EgressoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EgressoPayload>
          }
          deleteMany: {
            args: Prisma.EgressoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EgressoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EgressoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EgressoPayload>
          }
          aggregate: {
            args: Prisma.EgressoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEgresso>
          }
          groupBy: {
            args: Prisma.EgressoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EgressoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EgressoCountArgs<ExtArgs>
            result: $Utils.Optional<EgressoCountAggregateOutputType> | number
          }
        }
      }
      TrabalhoAtual: {
        payload: Prisma.$TrabalhoAtualPayload<ExtArgs>
        fields: Prisma.TrabalhoAtualFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrabalhoAtualFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabalhoAtualPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrabalhoAtualFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabalhoAtualPayload>
          }
          findFirst: {
            args: Prisma.TrabalhoAtualFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabalhoAtualPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrabalhoAtualFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabalhoAtualPayload>
          }
          findMany: {
            args: Prisma.TrabalhoAtualFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabalhoAtualPayload>[]
          }
          create: {
            args: Prisma.TrabalhoAtualCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabalhoAtualPayload>
          }
          createMany: {
            args: Prisma.TrabalhoAtualCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TrabalhoAtualDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabalhoAtualPayload>
          }
          update: {
            args: Prisma.TrabalhoAtualUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabalhoAtualPayload>
          }
          deleteMany: {
            args: Prisma.TrabalhoAtualDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrabalhoAtualUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrabalhoAtualUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabalhoAtualPayload>
          }
          aggregate: {
            args: Prisma.TrabalhoAtualAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrabalhoAtual>
          }
          groupBy: {
            args: Prisma.TrabalhoAtualGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrabalhoAtualGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrabalhoAtualCountArgs<ExtArgs>
            result: $Utils.Optional<TrabalhoAtualCountAggregateOutputType> | number
          }
        }
      }
      Instituicao: {
        payload: Prisma.$InstituicaoPayload<ExtArgs>
        fields: Prisma.InstituicaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstituicaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstituicaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          findFirst: {
            args: Prisma.InstituicaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstituicaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          findMany: {
            args: Prisma.InstituicaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>[]
          }
          create: {
            args: Prisma.InstituicaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          createMany: {
            args: Prisma.InstituicaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InstituicaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          update: {
            args: Prisma.InstituicaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          deleteMany: {
            args: Prisma.InstituicaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstituicaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InstituicaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          aggregate: {
            args: Prisma.InstituicaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstituicao>
          }
          groupBy: {
            args: Prisma.InstituicaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstituicaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstituicaoCountArgs<ExtArgs>
            result: $Utils.Optional<InstituicaoCountAggregateOutputType> | number
          }
        }
      }
      Curso: {
        payload: Prisma.$CursoPayload<ExtArgs>
        fields: Prisma.CursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findFirst: {
            args: Prisma.CursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findMany: {
            args: Prisma.CursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          create: {
            args: Prisma.CursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          createMany: {
            args: Prisma.CursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          update: {
            args: Prisma.CursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          deleteMany: {
            args: Prisma.CursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          aggregate: {
            args: Prisma.CursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurso>
          }
          groupBy: {
            args: Prisma.CursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CursoCountArgs<ExtArgs>
            result: $Utils.Optional<CursoCountAggregateOutputType> | number
          }
        }
      }
      Pessoa: {
        payload: Prisma.$PessoaPayload<ExtArgs>
        fields: Prisma.PessoaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PessoaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PessoaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          findFirst: {
            args: Prisma.PessoaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PessoaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          findMany: {
            args: Prisma.PessoaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>[]
          }
          create: {
            args: Prisma.PessoaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          createMany: {
            args: Prisma.PessoaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PessoaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          update: {
            args: Prisma.PessoaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          deleteMany: {
            args: Prisma.PessoaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PessoaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PessoaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          aggregate: {
            args: Prisma.PessoaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePessoa>
          }
          groupBy: {
            args: Prisma.PessoaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PessoaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PessoaCountArgs<ExtArgs>
            result: $Utils.Optional<PessoaCountAggregateOutputType> | number
          }
        }
      }
      Matricula: {
        payload: Prisma.$MatriculaPayload<ExtArgs>
        fields: Prisma.MatriculaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatriculaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatriculaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          findFirst: {
            args: Prisma.MatriculaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatriculaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          findMany: {
            args: Prisma.MatriculaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>[]
          }
          create: {
            args: Prisma.MatriculaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          createMany: {
            args: Prisma.MatriculaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MatriculaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          update: {
            args: Prisma.MatriculaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          deleteMany: {
            args: Prisma.MatriculaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatriculaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MatriculaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          aggregate: {
            args: Prisma.MatriculaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatricula>
          }
          groupBy: {
            args: Prisma.MatriculaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatriculaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatriculaCountArgs<ExtArgs>
            result: $Utils.Optional<MatriculaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    egresso?: EgressoOmit
    trabalhoAtual?: TrabalhoAtualOmit
    instituicao?: InstituicaoOmit
    curso?: CursoOmit
    pessoa?: PessoaOmit
    matricula?: MatriculaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CursoCountOutputType
   */

  export type CursoCountOutputType = {
    matriculas: number
  }

  export type CursoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matriculas?: boolean | CursoCountOutputTypeCountMatriculasArgs
  }

  // Custom InputTypes
  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CursoCountOutputType
     */
    select?: CursoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountMatriculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatriculaWhereInput
  }


  /**
   * Count Type PessoaCountOutputType
   */

  export type PessoaCountOutputType = {
    matriculas: number
  }

  export type PessoaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matriculas?: boolean | PessoaCountOutputTypeCountMatriculasArgs
  }

  // Custom InputTypes
  /**
   * PessoaCountOutputType without action
   */
  export type PessoaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PessoaCountOutputType
     */
    select?: PessoaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PessoaCountOutputType without action
   */
  export type PessoaCountOutputTypeCountMatriculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatriculaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Egresso
   */

  export type AggregateEgresso = {
    _count: EgressoCountAggregateOutputType | null
    _avg: EgressoAvgAggregateOutputType | null
    _sum: EgressoSumAggregateOutputType | null
    _min: EgressoMinAggregateOutputType | null
    _max: EgressoMaxAggregateOutputType | null
  }

  export type EgressoAvgAggregateOutputType = {
    id: number | null
  }

  export type EgressoSumAggregateOutputType = {
    id: number | null
  }

  export type EgressoMinAggregateOutputType = {
    id: number | null
    cpf: string | null
    senha: string | null
    email: string | null
    telefone: string | null
    cidade: string | null
    estado: string | null
    pais: string | null
    fotoPerfil: string | null
    linkedin: string | null
    instagram: string | null
    visivel: boolean | null
  }

  export type EgressoMaxAggregateOutputType = {
    id: number | null
    cpf: string | null
    senha: string | null
    email: string | null
    telefone: string | null
    cidade: string | null
    estado: string | null
    pais: string | null
    fotoPerfil: string | null
    linkedin: string | null
    instagram: string | null
    visivel: boolean | null
  }

  export type EgressoCountAggregateOutputType = {
    id: number
    cpf: number
    senha: number
    email: number
    telefone: number
    cidade: number
    estado: number
    pais: number
    fotoPerfil: number
    linkedin: number
    instagram: number
    visivel: number
    _all: number
  }


  export type EgressoAvgAggregateInputType = {
    id?: true
  }

  export type EgressoSumAggregateInputType = {
    id?: true
  }

  export type EgressoMinAggregateInputType = {
    id?: true
    cpf?: true
    senha?: true
    email?: true
    telefone?: true
    cidade?: true
    estado?: true
    pais?: true
    fotoPerfil?: true
    linkedin?: true
    instagram?: true
    visivel?: true
  }

  export type EgressoMaxAggregateInputType = {
    id?: true
    cpf?: true
    senha?: true
    email?: true
    telefone?: true
    cidade?: true
    estado?: true
    pais?: true
    fotoPerfil?: true
    linkedin?: true
    instagram?: true
    visivel?: true
  }

  export type EgressoCountAggregateInputType = {
    id?: true
    cpf?: true
    senha?: true
    email?: true
    telefone?: true
    cidade?: true
    estado?: true
    pais?: true
    fotoPerfil?: true
    linkedin?: true
    instagram?: true
    visivel?: true
    _all?: true
  }

  export type EgressoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Egresso to aggregate.
     */
    where?: EgressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Egressos to fetch.
     */
    orderBy?: EgressoOrderByWithRelationInput | EgressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EgressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Egressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Egressos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Egressos
    **/
    _count?: true | EgressoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EgressoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EgressoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EgressoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EgressoMaxAggregateInputType
  }

  export type GetEgressoAggregateType<T extends EgressoAggregateArgs> = {
        [P in keyof T & keyof AggregateEgresso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEgresso[P]>
      : GetScalarType<T[P], AggregateEgresso[P]>
  }




  export type EgressoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EgressoWhereInput
    orderBy?: EgressoOrderByWithAggregationInput | EgressoOrderByWithAggregationInput[]
    by: EgressoScalarFieldEnum[] | EgressoScalarFieldEnum
    having?: EgressoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EgressoCountAggregateInputType | true
    _avg?: EgressoAvgAggregateInputType
    _sum?: EgressoSumAggregateInputType
    _min?: EgressoMinAggregateInputType
    _max?: EgressoMaxAggregateInputType
  }

  export type EgressoGroupByOutputType = {
    id: number
    cpf: string
    senha: string
    email: string
    telefone: string
    cidade: string
    estado: string
    pais: string
    fotoPerfil: string | null
    linkedin: string | null
    instagram: string | null
    visivel: boolean
    _count: EgressoCountAggregateOutputType | null
    _avg: EgressoAvgAggregateOutputType | null
    _sum: EgressoSumAggregateOutputType | null
    _min: EgressoMinAggregateOutputType | null
    _max: EgressoMaxAggregateOutputType | null
  }

  type GetEgressoGroupByPayload<T extends EgressoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EgressoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EgressoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EgressoGroupByOutputType[P]>
            : GetScalarType<T[P], EgressoGroupByOutputType[P]>
        }
      >
    >


  export type EgressoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    senha?: boolean
    email?: boolean
    telefone?: boolean
    cidade?: boolean
    estado?: boolean
    pais?: boolean
    fotoPerfil?: boolean
    linkedin?: boolean
    instagram?: boolean
    visivel?: boolean
    trabalhoAtual?: boolean | Egresso$trabalhoAtualArgs<ExtArgs>
  }, ExtArgs["result"]["egresso"]>



  export type EgressoSelectScalar = {
    id?: boolean
    cpf?: boolean
    senha?: boolean
    email?: boolean
    telefone?: boolean
    cidade?: boolean
    estado?: boolean
    pais?: boolean
    fotoPerfil?: boolean
    linkedin?: boolean
    instagram?: boolean
    visivel?: boolean
  }

  export type EgressoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cpf" | "senha" | "email" | "telefone" | "cidade" | "estado" | "pais" | "fotoPerfil" | "linkedin" | "instagram" | "visivel", ExtArgs["result"]["egresso"]>
  export type EgressoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trabalhoAtual?: boolean | Egresso$trabalhoAtualArgs<ExtArgs>
  }

  export type $EgressoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Egresso"
    objects: {
      trabalhoAtual: Prisma.$TrabalhoAtualPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cpf: string
      senha: string
      email: string
      telefone: string
      cidade: string
      estado: string
      pais: string
      fotoPerfil: string | null
      linkedin: string | null
      instagram: string | null
      visivel: boolean
    }, ExtArgs["result"]["egresso"]>
    composites: {}
  }

  type EgressoGetPayload<S extends boolean | null | undefined | EgressoDefaultArgs> = $Result.GetResult<Prisma.$EgressoPayload, S>

  type EgressoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EgressoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EgressoCountAggregateInputType | true
    }

  export interface EgressoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Egresso'], meta: { name: 'Egresso' } }
    /**
     * Find zero or one Egresso that matches the filter.
     * @param {EgressoFindUniqueArgs} args - Arguments to find a Egresso
     * @example
     * // Get one Egresso
     * const egresso = await prisma.egresso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EgressoFindUniqueArgs>(args: SelectSubset<T, EgressoFindUniqueArgs<ExtArgs>>): Prisma__EgressoClient<$Result.GetResult<Prisma.$EgressoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Egresso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EgressoFindUniqueOrThrowArgs} args - Arguments to find a Egresso
     * @example
     * // Get one Egresso
     * const egresso = await prisma.egresso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EgressoFindUniqueOrThrowArgs>(args: SelectSubset<T, EgressoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EgressoClient<$Result.GetResult<Prisma.$EgressoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Egresso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EgressoFindFirstArgs} args - Arguments to find a Egresso
     * @example
     * // Get one Egresso
     * const egresso = await prisma.egresso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EgressoFindFirstArgs>(args?: SelectSubset<T, EgressoFindFirstArgs<ExtArgs>>): Prisma__EgressoClient<$Result.GetResult<Prisma.$EgressoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Egresso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EgressoFindFirstOrThrowArgs} args - Arguments to find a Egresso
     * @example
     * // Get one Egresso
     * const egresso = await prisma.egresso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EgressoFindFirstOrThrowArgs>(args?: SelectSubset<T, EgressoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EgressoClient<$Result.GetResult<Prisma.$EgressoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Egressos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EgressoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Egressos
     * const egressos = await prisma.egresso.findMany()
     * 
     * // Get first 10 Egressos
     * const egressos = await prisma.egresso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const egressoWithIdOnly = await prisma.egresso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EgressoFindManyArgs>(args?: SelectSubset<T, EgressoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EgressoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Egresso.
     * @param {EgressoCreateArgs} args - Arguments to create a Egresso.
     * @example
     * // Create one Egresso
     * const Egresso = await prisma.egresso.create({
     *   data: {
     *     // ... data to create a Egresso
     *   }
     * })
     * 
     */
    create<T extends EgressoCreateArgs>(args: SelectSubset<T, EgressoCreateArgs<ExtArgs>>): Prisma__EgressoClient<$Result.GetResult<Prisma.$EgressoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Egressos.
     * @param {EgressoCreateManyArgs} args - Arguments to create many Egressos.
     * @example
     * // Create many Egressos
     * const egresso = await prisma.egresso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EgressoCreateManyArgs>(args?: SelectSubset<T, EgressoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Egresso.
     * @param {EgressoDeleteArgs} args - Arguments to delete one Egresso.
     * @example
     * // Delete one Egresso
     * const Egresso = await prisma.egresso.delete({
     *   where: {
     *     // ... filter to delete one Egresso
     *   }
     * })
     * 
     */
    delete<T extends EgressoDeleteArgs>(args: SelectSubset<T, EgressoDeleteArgs<ExtArgs>>): Prisma__EgressoClient<$Result.GetResult<Prisma.$EgressoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Egresso.
     * @param {EgressoUpdateArgs} args - Arguments to update one Egresso.
     * @example
     * // Update one Egresso
     * const egresso = await prisma.egresso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EgressoUpdateArgs>(args: SelectSubset<T, EgressoUpdateArgs<ExtArgs>>): Prisma__EgressoClient<$Result.GetResult<Prisma.$EgressoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Egressos.
     * @param {EgressoDeleteManyArgs} args - Arguments to filter Egressos to delete.
     * @example
     * // Delete a few Egressos
     * const { count } = await prisma.egresso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EgressoDeleteManyArgs>(args?: SelectSubset<T, EgressoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Egressos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EgressoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Egressos
     * const egresso = await prisma.egresso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EgressoUpdateManyArgs>(args: SelectSubset<T, EgressoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Egresso.
     * @param {EgressoUpsertArgs} args - Arguments to update or create a Egresso.
     * @example
     * // Update or create a Egresso
     * const egresso = await prisma.egresso.upsert({
     *   create: {
     *     // ... data to create a Egresso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Egresso we want to update
     *   }
     * })
     */
    upsert<T extends EgressoUpsertArgs>(args: SelectSubset<T, EgressoUpsertArgs<ExtArgs>>): Prisma__EgressoClient<$Result.GetResult<Prisma.$EgressoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Egressos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EgressoCountArgs} args - Arguments to filter Egressos to count.
     * @example
     * // Count the number of Egressos
     * const count = await prisma.egresso.count({
     *   where: {
     *     // ... the filter for the Egressos we want to count
     *   }
     * })
    **/
    count<T extends EgressoCountArgs>(
      args?: Subset<T, EgressoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EgressoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Egresso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EgressoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EgressoAggregateArgs>(args: Subset<T, EgressoAggregateArgs>): Prisma.PrismaPromise<GetEgressoAggregateType<T>>

    /**
     * Group by Egresso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EgressoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EgressoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EgressoGroupByArgs['orderBy'] }
        : { orderBy?: EgressoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EgressoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEgressoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Egresso model
   */
  readonly fields: EgressoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Egresso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EgressoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trabalhoAtual<T extends Egresso$trabalhoAtualArgs<ExtArgs> = {}>(args?: Subset<T, Egresso$trabalhoAtualArgs<ExtArgs>>): Prisma__TrabalhoAtualClient<$Result.GetResult<Prisma.$TrabalhoAtualPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Egresso model
   */
  interface EgressoFieldRefs {
    readonly id: FieldRef<"Egresso", 'Int'>
    readonly cpf: FieldRef<"Egresso", 'String'>
    readonly senha: FieldRef<"Egresso", 'String'>
    readonly email: FieldRef<"Egresso", 'String'>
    readonly telefone: FieldRef<"Egresso", 'String'>
    readonly cidade: FieldRef<"Egresso", 'String'>
    readonly estado: FieldRef<"Egresso", 'String'>
    readonly pais: FieldRef<"Egresso", 'String'>
    readonly fotoPerfil: FieldRef<"Egresso", 'String'>
    readonly linkedin: FieldRef<"Egresso", 'String'>
    readonly instagram: FieldRef<"Egresso", 'String'>
    readonly visivel: FieldRef<"Egresso", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Egresso findUnique
   */
  export type EgressoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egresso
     */
    select?: EgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egresso
     */
    omit?: EgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgressoInclude<ExtArgs> | null
    /**
     * Filter, which Egresso to fetch.
     */
    where: EgressoWhereUniqueInput
  }

  /**
   * Egresso findUniqueOrThrow
   */
  export type EgressoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egresso
     */
    select?: EgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egresso
     */
    omit?: EgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgressoInclude<ExtArgs> | null
    /**
     * Filter, which Egresso to fetch.
     */
    where: EgressoWhereUniqueInput
  }

  /**
   * Egresso findFirst
   */
  export type EgressoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egresso
     */
    select?: EgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egresso
     */
    omit?: EgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgressoInclude<ExtArgs> | null
    /**
     * Filter, which Egresso to fetch.
     */
    where?: EgressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Egressos to fetch.
     */
    orderBy?: EgressoOrderByWithRelationInput | EgressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Egressos.
     */
    cursor?: EgressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Egressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Egressos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Egressos.
     */
    distinct?: EgressoScalarFieldEnum | EgressoScalarFieldEnum[]
  }

  /**
   * Egresso findFirstOrThrow
   */
  export type EgressoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egresso
     */
    select?: EgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egresso
     */
    omit?: EgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgressoInclude<ExtArgs> | null
    /**
     * Filter, which Egresso to fetch.
     */
    where?: EgressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Egressos to fetch.
     */
    orderBy?: EgressoOrderByWithRelationInput | EgressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Egressos.
     */
    cursor?: EgressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Egressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Egressos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Egressos.
     */
    distinct?: EgressoScalarFieldEnum | EgressoScalarFieldEnum[]
  }

  /**
   * Egresso findMany
   */
  export type EgressoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egresso
     */
    select?: EgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egresso
     */
    omit?: EgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgressoInclude<ExtArgs> | null
    /**
     * Filter, which Egressos to fetch.
     */
    where?: EgressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Egressos to fetch.
     */
    orderBy?: EgressoOrderByWithRelationInput | EgressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Egressos.
     */
    cursor?: EgressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Egressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Egressos.
     */
    skip?: number
    distinct?: EgressoScalarFieldEnum | EgressoScalarFieldEnum[]
  }

  /**
   * Egresso create
   */
  export type EgressoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egresso
     */
    select?: EgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egresso
     */
    omit?: EgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgressoInclude<ExtArgs> | null
    /**
     * The data needed to create a Egresso.
     */
    data: XOR<EgressoCreateInput, EgressoUncheckedCreateInput>
  }

  /**
   * Egresso createMany
   */
  export type EgressoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Egressos.
     */
    data: EgressoCreateManyInput | EgressoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Egresso update
   */
  export type EgressoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egresso
     */
    select?: EgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egresso
     */
    omit?: EgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgressoInclude<ExtArgs> | null
    /**
     * The data needed to update a Egresso.
     */
    data: XOR<EgressoUpdateInput, EgressoUncheckedUpdateInput>
    /**
     * Choose, which Egresso to update.
     */
    where: EgressoWhereUniqueInput
  }

  /**
   * Egresso updateMany
   */
  export type EgressoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Egressos.
     */
    data: XOR<EgressoUpdateManyMutationInput, EgressoUncheckedUpdateManyInput>
    /**
     * Filter which Egressos to update
     */
    where?: EgressoWhereInput
    /**
     * Limit how many Egressos to update.
     */
    limit?: number
  }

  /**
   * Egresso upsert
   */
  export type EgressoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egresso
     */
    select?: EgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egresso
     */
    omit?: EgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgressoInclude<ExtArgs> | null
    /**
     * The filter to search for the Egresso to update in case it exists.
     */
    where: EgressoWhereUniqueInput
    /**
     * In case the Egresso found by the `where` argument doesn't exist, create a new Egresso with this data.
     */
    create: XOR<EgressoCreateInput, EgressoUncheckedCreateInput>
    /**
     * In case the Egresso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EgressoUpdateInput, EgressoUncheckedUpdateInput>
  }

  /**
   * Egresso delete
   */
  export type EgressoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egresso
     */
    select?: EgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egresso
     */
    omit?: EgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgressoInclude<ExtArgs> | null
    /**
     * Filter which Egresso to delete.
     */
    where: EgressoWhereUniqueInput
  }

  /**
   * Egresso deleteMany
   */
  export type EgressoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Egressos to delete
     */
    where?: EgressoWhereInput
    /**
     * Limit how many Egressos to delete.
     */
    limit?: number
  }

  /**
   * Egresso.trabalhoAtual
   */
  export type Egresso$trabalhoAtualArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabalhoAtual
     */
    select?: TrabalhoAtualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrabalhoAtual
     */
    omit?: TrabalhoAtualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabalhoAtualInclude<ExtArgs> | null
    where?: TrabalhoAtualWhereInput
  }

  /**
   * Egresso without action
   */
  export type EgressoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Egresso
     */
    select?: EgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Egresso
     */
    omit?: EgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EgressoInclude<ExtArgs> | null
  }


  /**
   * Model TrabalhoAtual
   */

  export type AggregateTrabalhoAtual = {
    _count: TrabalhoAtualCountAggregateOutputType | null
    _avg: TrabalhoAtualAvgAggregateOutputType | null
    _sum: TrabalhoAtualSumAggregateOutputType | null
    _min: TrabalhoAtualMinAggregateOutputType | null
    _max: TrabalhoAtualMaxAggregateOutputType | null
  }

  export type TrabalhoAtualAvgAggregateOutputType = {
    id: number | null
    anoEntrada: number | null
    egressoId: number | null
  }

  export type TrabalhoAtualSumAggregateOutputType = {
    id: number | null
    anoEntrada: number | null
    egressoId: number | null
  }

  export type TrabalhoAtualMinAggregateOutputType = {
    id: number | null
    empresa: string | null
    cidade: string | null
    estado: string | null
    pais: string | null
    cargo: string | null
    anoEntrada: number | null
    egressoId: number | null
  }

  export type TrabalhoAtualMaxAggregateOutputType = {
    id: number | null
    empresa: string | null
    cidade: string | null
    estado: string | null
    pais: string | null
    cargo: string | null
    anoEntrada: number | null
    egressoId: number | null
  }

  export type TrabalhoAtualCountAggregateOutputType = {
    id: number
    empresa: number
    cidade: number
    estado: number
    pais: number
    cargo: number
    anoEntrada: number
    egressoId: number
    _all: number
  }


  export type TrabalhoAtualAvgAggregateInputType = {
    id?: true
    anoEntrada?: true
    egressoId?: true
  }

  export type TrabalhoAtualSumAggregateInputType = {
    id?: true
    anoEntrada?: true
    egressoId?: true
  }

  export type TrabalhoAtualMinAggregateInputType = {
    id?: true
    empresa?: true
    cidade?: true
    estado?: true
    pais?: true
    cargo?: true
    anoEntrada?: true
    egressoId?: true
  }

  export type TrabalhoAtualMaxAggregateInputType = {
    id?: true
    empresa?: true
    cidade?: true
    estado?: true
    pais?: true
    cargo?: true
    anoEntrada?: true
    egressoId?: true
  }

  export type TrabalhoAtualCountAggregateInputType = {
    id?: true
    empresa?: true
    cidade?: true
    estado?: true
    pais?: true
    cargo?: true
    anoEntrada?: true
    egressoId?: true
    _all?: true
  }

  export type TrabalhoAtualAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrabalhoAtual to aggregate.
     */
    where?: TrabalhoAtualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrabalhoAtuals to fetch.
     */
    orderBy?: TrabalhoAtualOrderByWithRelationInput | TrabalhoAtualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrabalhoAtualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrabalhoAtuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrabalhoAtuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrabalhoAtuals
    **/
    _count?: true | TrabalhoAtualCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrabalhoAtualAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrabalhoAtualSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrabalhoAtualMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrabalhoAtualMaxAggregateInputType
  }

  export type GetTrabalhoAtualAggregateType<T extends TrabalhoAtualAggregateArgs> = {
        [P in keyof T & keyof AggregateTrabalhoAtual]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrabalhoAtual[P]>
      : GetScalarType<T[P], AggregateTrabalhoAtual[P]>
  }




  export type TrabalhoAtualGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrabalhoAtualWhereInput
    orderBy?: TrabalhoAtualOrderByWithAggregationInput | TrabalhoAtualOrderByWithAggregationInput[]
    by: TrabalhoAtualScalarFieldEnum[] | TrabalhoAtualScalarFieldEnum
    having?: TrabalhoAtualScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrabalhoAtualCountAggregateInputType | true
    _avg?: TrabalhoAtualAvgAggregateInputType
    _sum?: TrabalhoAtualSumAggregateInputType
    _min?: TrabalhoAtualMinAggregateInputType
    _max?: TrabalhoAtualMaxAggregateInputType
  }

  export type TrabalhoAtualGroupByOutputType = {
    id: number
    empresa: string
    cidade: string
    estado: string
    pais: string
    cargo: string
    anoEntrada: number
    egressoId: number
    _count: TrabalhoAtualCountAggregateOutputType | null
    _avg: TrabalhoAtualAvgAggregateOutputType | null
    _sum: TrabalhoAtualSumAggregateOutputType | null
    _min: TrabalhoAtualMinAggregateOutputType | null
    _max: TrabalhoAtualMaxAggregateOutputType | null
  }

  type GetTrabalhoAtualGroupByPayload<T extends TrabalhoAtualGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrabalhoAtualGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrabalhoAtualGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrabalhoAtualGroupByOutputType[P]>
            : GetScalarType<T[P], TrabalhoAtualGroupByOutputType[P]>
        }
      >
    >


  export type TrabalhoAtualSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empresa?: boolean
    cidade?: boolean
    estado?: boolean
    pais?: boolean
    cargo?: boolean
    anoEntrada?: boolean
    egressoId?: boolean
    egresso?: boolean | EgressoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trabalhoAtual"]>



  export type TrabalhoAtualSelectScalar = {
    id?: boolean
    empresa?: boolean
    cidade?: boolean
    estado?: boolean
    pais?: boolean
    cargo?: boolean
    anoEntrada?: boolean
    egressoId?: boolean
  }

  export type TrabalhoAtualOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "empresa" | "cidade" | "estado" | "pais" | "cargo" | "anoEntrada" | "egressoId", ExtArgs["result"]["trabalhoAtual"]>
  export type TrabalhoAtualInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    egresso?: boolean | EgressoDefaultArgs<ExtArgs>
  }

  export type $TrabalhoAtualPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrabalhoAtual"
    objects: {
      egresso: Prisma.$EgressoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      empresa: string
      cidade: string
      estado: string
      pais: string
      cargo: string
      anoEntrada: number
      egressoId: number
    }, ExtArgs["result"]["trabalhoAtual"]>
    composites: {}
  }

  type TrabalhoAtualGetPayload<S extends boolean | null | undefined | TrabalhoAtualDefaultArgs> = $Result.GetResult<Prisma.$TrabalhoAtualPayload, S>

  type TrabalhoAtualCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrabalhoAtualFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrabalhoAtualCountAggregateInputType | true
    }

  export interface TrabalhoAtualDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrabalhoAtual'], meta: { name: 'TrabalhoAtual' } }
    /**
     * Find zero or one TrabalhoAtual that matches the filter.
     * @param {TrabalhoAtualFindUniqueArgs} args - Arguments to find a TrabalhoAtual
     * @example
     * // Get one TrabalhoAtual
     * const trabalhoAtual = await prisma.trabalhoAtual.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrabalhoAtualFindUniqueArgs>(args: SelectSubset<T, TrabalhoAtualFindUniqueArgs<ExtArgs>>): Prisma__TrabalhoAtualClient<$Result.GetResult<Prisma.$TrabalhoAtualPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrabalhoAtual that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrabalhoAtualFindUniqueOrThrowArgs} args - Arguments to find a TrabalhoAtual
     * @example
     * // Get one TrabalhoAtual
     * const trabalhoAtual = await prisma.trabalhoAtual.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrabalhoAtualFindUniqueOrThrowArgs>(args: SelectSubset<T, TrabalhoAtualFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrabalhoAtualClient<$Result.GetResult<Prisma.$TrabalhoAtualPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrabalhoAtual that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabalhoAtualFindFirstArgs} args - Arguments to find a TrabalhoAtual
     * @example
     * // Get one TrabalhoAtual
     * const trabalhoAtual = await prisma.trabalhoAtual.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrabalhoAtualFindFirstArgs>(args?: SelectSubset<T, TrabalhoAtualFindFirstArgs<ExtArgs>>): Prisma__TrabalhoAtualClient<$Result.GetResult<Prisma.$TrabalhoAtualPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrabalhoAtual that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabalhoAtualFindFirstOrThrowArgs} args - Arguments to find a TrabalhoAtual
     * @example
     * // Get one TrabalhoAtual
     * const trabalhoAtual = await prisma.trabalhoAtual.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrabalhoAtualFindFirstOrThrowArgs>(args?: SelectSubset<T, TrabalhoAtualFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrabalhoAtualClient<$Result.GetResult<Prisma.$TrabalhoAtualPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrabalhoAtuals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabalhoAtualFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrabalhoAtuals
     * const trabalhoAtuals = await prisma.trabalhoAtual.findMany()
     * 
     * // Get first 10 TrabalhoAtuals
     * const trabalhoAtuals = await prisma.trabalhoAtual.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trabalhoAtualWithIdOnly = await prisma.trabalhoAtual.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrabalhoAtualFindManyArgs>(args?: SelectSubset<T, TrabalhoAtualFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrabalhoAtualPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrabalhoAtual.
     * @param {TrabalhoAtualCreateArgs} args - Arguments to create a TrabalhoAtual.
     * @example
     * // Create one TrabalhoAtual
     * const TrabalhoAtual = await prisma.trabalhoAtual.create({
     *   data: {
     *     // ... data to create a TrabalhoAtual
     *   }
     * })
     * 
     */
    create<T extends TrabalhoAtualCreateArgs>(args: SelectSubset<T, TrabalhoAtualCreateArgs<ExtArgs>>): Prisma__TrabalhoAtualClient<$Result.GetResult<Prisma.$TrabalhoAtualPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrabalhoAtuals.
     * @param {TrabalhoAtualCreateManyArgs} args - Arguments to create many TrabalhoAtuals.
     * @example
     * // Create many TrabalhoAtuals
     * const trabalhoAtual = await prisma.trabalhoAtual.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrabalhoAtualCreateManyArgs>(args?: SelectSubset<T, TrabalhoAtualCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TrabalhoAtual.
     * @param {TrabalhoAtualDeleteArgs} args - Arguments to delete one TrabalhoAtual.
     * @example
     * // Delete one TrabalhoAtual
     * const TrabalhoAtual = await prisma.trabalhoAtual.delete({
     *   where: {
     *     // ... filter to delete one TrabalhoAtual
     *   }
     * })
     * 
     */
    delete<T extends TrabalhoAtualDeleteArgs>(args: SelectSubset<T, TrabalhoAtualDeleteArgs<ExtArgs>>): Prisma__TrabalhoAtualClient<$Result.GetResult<Prisma.$TrabalhoAtualPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrabalhoAtual.
     * @param {TrabalhoAtualUpdateArgs} args - Arguments to update one TrabalhoAtual.
     * @example
     * // Update one TrabalhoAtual
     * const trabalhoAtual = await prisma.trabalhoAtual.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrabalhoAtualUpdateArgs>(args: SelectSubset<T, TrabalhoAtualUpdateArgs<ExtArgs>>): Prisma__TrabalhoAtualClient<$Result.GetResult<Prisma.$TrabalhoAtualPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrabalhoAtuals.
     * @param {TrabalhoAtualDeleteManyArgs} args - Arguments to filter TrabalhoAtuals to delete.
     * @example
     * // Delete a few TrabalhoAtuals
     * const { count } = await prisma.trabalhoAtual.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrabalhoAtualDeleteManyArgs>(args?: SelectSubset<T, TrabalhoAtualDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrabalhoAtuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabalhoAtualUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrabalhoAtuals
     * const trabalhoAtual = await prisma.trabalhoAtual.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrabalhoAtualUpdateManyArgs>(args: SelectSubset<T, TrabalhoAtualUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrabalhoAtual.
     * @param {TrabalhoAtualUpsertArgs} args - Arguments to update or create a TrabalhoAtual.
     * @example
     * // Update or create a TrabalhoAtual
     * const trabalhoAtual = await prisma.trabalhoAtual.upsert({
     *   create: {
     *     // ... data to create a TrabalhoAtual
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrabalhoAtual we want to update
     *   }
     * })
     */
    upsert<T extends TrabalhoAtualUpsertArgs>(args: SelectSubset<T, TrabalhoAtualUpsertArgs<ExtArgs>>): Prisma__TrabalhoAtualClient<$Result.GetResult<Prisma.$TrabalhoAtualPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrabalhoAtuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabalhoAtualCountArgs} args - Arguments to filter TrabalhoAtuals to count.
     * @example
     * // Count the number of TrabalhoAtuals
     * const count = await prisma.trabalhoAtual.count({
     *   where: {
     *     // ... the filter for the TrabalhoAtuals we want to count
     *   }
     * })
    **/
    count<T extends TrabalhoAtualCountArgs>(
      args?: Subset<T, TrabalhoAtualCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrabalhoAtualCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrabalhoAtual.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabalhoAtualAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrabalhoAtualAggregateArgs>(args: Subset<T, TrabalhoAtualAggregateArgs>): Prisma.PrismaPromise<GetTrabalhoAtualAggregateType<T>>

    /**
     * Group by TrabalhoAtual.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabalhoAtualGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrabalhoAtualGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrabalhoAtualGroupByArgs['orderBy'] }
        : { orderBy?: TrabalhoAtualGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrabalhoAtualGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrabalhoAtualGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrabalhoAtual model
   */
  readonly fields: TrabalhoAtualFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrabalhoAtual.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrabalhoAtualClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    egresso<T extends EgressoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EgressoDefaultArgs<ExtArgs>>): Prisma__EgressoClient<$Result.GetResult<Prisma.$EgressoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrabalhoAtual model
   */
  interface TrabalhoAtualFieldRefs {
    readonly id: FieldRef<"TrabalhoAtual", 'Int'>
    readonly empresa: FieldRef<"TrabalhoAtual", 'String'>
    readonly cidade: FieldRef<"TrabalhoAtual", 'String'>
    readonly estado: FieldRef<"TrabalhoAtual", 'String'>
    readonly pais: FieldRef<"TrabalhoAtual", 'String'>
    readonly cargo: FieldRef<"TrabalhoAtual", 'String'>
    readonly anoEntrada: FieldRef<"TrabalhoAtual", 'Int'>
    readonly egressoId: FieldRef<"TrabalhoAtual", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TrabalhoAtual findUnique
   */
  export type TrabalhoAtualFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabalhoAtual
     */
    select?: TrabalhoAtualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrabalhoAtual
     */
    omit?: TrabalhoAtualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabalhoAtualInclude<ExtArgs> | null
    /**
     * Filter, which TrabalhoAtual to fetch.
     */
    where: TrabalhoAtualWhereUniqueInput
  }

  /**
   * TrabalhoAtual findUniqueOrThrow
   */
  export type TrabalhoAtualFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabalhoAtual
     */
    select?: TrabalhoAtualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrabalhoAtual
     */
    omit?: TrabalhoAtualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabalhoAtualInclude<ExtArgs> | null
    /**
     * Filter, which TrabalhoAtual to fetch.
     */
    where: TrabalhoAtualWhereUniqueInput
  }

  /**
   * TrabalhoAtual findFirst
   */
  export type TrabalhoAtualFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabalhoAtual
     */
    select?: TrabalhoAtualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrabalhoAtual
     */
    omit?: TrabalhoAtualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabalhoAtualInclude<ExtArgs> | null
    /**
     * Filter, which TrabalhoAtual to fetch.
     */
    where?: TrabalhoAtualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrabalhoAtuals to fetch.
     */
    orderBy?: TrabalhoAtualOrderByWithRelationInput | TrabalhoAtualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrabalhoAtuals.
     */
    cursor?: TrabalhoAtualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrabalhoAtuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrabalhoAtuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrabalhoAtuals.
     */
    distinct?: TrabalhoAtualScalarFieldEnum | TrabalhoAtualScalarFieldEnum[]
  }

  /**
   * TrabalhoAtual findFirstOrThrow
   */
  export type TrabalhoAtualFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabalhoAtual
     */
    select?: TrabalhoAtualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrabalhoAtual
     */
    omit?: TrabalhoAtualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabalhoAtualInclude<ExtArgs> | null
    /**
     * Filter, which TrabalhoAtual to fetch.
     */
    where?: TrabalhoAtualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrabalhoAtuals to fetch.
     */
    orderBy?: TrabalhoAtualOrderByWithRelationInput | TrabalhoAtualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrabalhoAtuals.
     */
    cursor?: TrabalhoAtualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrabalhoAtuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrabalhoAtuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrabalhoAtuals.
     */
    distinct?: TrabalhoAtualScalarFieldEnum | TrabalhoAtualScalarFieldEnum[]
  }

  /**
   * TrabalhoAtual findMany
   */
  export type TrabalhoAtualFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabalhoAtual
     */
    select?: TrabalhoAtualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrabalhoAtual
     */
    omit?: TrabalhoAtualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabalhoAtualInclude<ExtArgs> | null
    /**
     * Filter, which TrabalhoAtuals to fetch.
     */
    where?: TrabalhoAtualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrabalhoAtuals to fetch.
     */
    orderBy?: TrabalhoAtualOrderByWithRelationInput | TrabalhoAtualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrabalhoAtuals.
     */
    cursor?: TrabalhoAtualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrabalhoAtuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrabalhoAtuals.
     */
    skip?: number
    distinct?: TrabalhoAtualScalarFieldEnum | TrabalhoAtualScalarFieldEnum[]
  }

  /**
   * TrabalhoAtual create
   */
  export type TrabalhoAtualCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabalhoAtual
     */
    select?: TrabalhoAtualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrabalhoAtual
     */
    omit?: TrabalhoAtualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabalhoAtualInclude<ExtArgs> | null
    /**
     * The data needed to create a TrabalhoAtual.
     */
    data: XOR<TrabalhoAtualCreateInput, TrabalhoAtualUncheckedCreateInput>
  }

  /**
   * TrabalhoAtual createMany
   */
  export type TrabalhoAtualCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrabalhoAtuals.
     */
    data: TrabalhoAtualCreateManyInput | TrabalhoAtualCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrabalhoAtual update
   */
  export type TrabalhoAtualUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabalhoAtual
     */
    select?: TrabalhoAtualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrabalhoAtual
     */
    omit?: TrabalhoAtualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabalhoAtualInclude<ExtArgs> | null
    /**
     * The data needed to update a TrabalhoAtual.
     */
    data: XOR<TrabalhoAtualUpdateInput, TrabalhoAtualUncheckedUpdateInput>
    /**
     * Choose, which TrabalhoAtual to update.
     */
    where: TrabalhoAtualWhereUniqueInput
  }

  /**
   * TrabalhoAtual updateMany
   */
  export type TrabalhoAtualUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrabalhoAtuals.
     */
    data: XOR<TrabalhoAtualUpdateManyMutationInput, TrabalhoAtualUncheckedUpdateManyInput>
    /**
     * Filter which TrabalhoAtuals to update
     */
    where?: TrabalhoAtualWhereInput
    /**
     * Limit how many TrabalhoAtuals to update.
     */
    limit?: number
  }

  /**
   * TrabalhoAtual upsert
   */
  export type TrabalhoAtualUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabalhoAtual
     */
    select?: TrabalhoAtualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrabalhoAtual
     */
    omit?: TrabalhoAtualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabalhoAtualInclude<ExtArgs> | null
    /**
     * The filter to search for the TrabalhoAtual to update in case it exists.
     */
    where: TrabalhoAtualWhereUniqueInput
    /**
     * In case the TrabalhoAtual found by the `where` argument doesn't exist, create a new TrabalhoAtual with this data.
     */
    create: XOR<TrabalhoAtualCreateInput, TrabalhoAtualUncheckedCreateInput>
    /**
     * In case the TrabalhoAtual was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrabalhoAtualUpdateInput, TrabalhoAtualUncheckedUpdateInput>
  }

  /**
   * TrabalhoAtual delete
   */
  export type TrabalhoAtualDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabalhoAtual
     */
    select?: TrabalhoAtualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrabalhoAtual
     */
    omit?: TrabalhoAtualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabalhoAtualInclude<ExtArgs> | null
    /**
     * Filter which TrabalhoAtual to delete.
     */
    where: TrabalhoAtualWhereUniqueInput
  }

  /**
   * TrabalhoAtual deleteMany
   */
  export type TrabalhoAtualDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrabalhoAtuals to delete
     */
    where?: TrabalhoAtualWhereInput
    /**
     * Limit how many TrabalhoAtuals to delete.
     */
    limit?: number
  }

  /**
   * TrabalhoAtual without action
   */
  export type TrabalhoAtualDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabalhoAtual
     */
    select?: TrabalhoAtualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrabalhoAtual
     */
    omit?: TrabalhoAtualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabalhoAtualInclude<ExtArgs> | null
  }


  /**
   * Model Instituicao
   */

  export type AggregateInstituicao = {
    _count: InstituicaoCountAggregateOutputType | null
    _avg: InstituicaoAvgAggregateOutputType | null
    _sum: InstituicaoSumAggregateOutputType | null
    _min: InstituicaoMinAggregateOutputType | null
    _max: InstituicaoMaxAggregateOutputType | null
  }

  export type InstituicaoAvgAggregateOutputType = {
    id: number | null
  }

  export type InstituicaoSumAggregateOutputType = {
    id: number | null
  }

  export type InstituicaoMinAggregateOutputType = {
    id: number | null
    fotoPerfil: string | null
    nomeCompleto: string | null
    cnpj: string | null
    telefone: string | null
    endereco: string | null
    cep: string | null
    nomeRepresentante: string | null
    cpfRepresentante: string | null
    email: string | null
    senha: string | null
  }

  export type InstituicaoMaxAggregateOutputType = {
    id: number | null
    fotoPerfil: string | null
    nomeCompleto: string | null
    cnpj: string | null
    telefone: string | null
    endereco: string | null
    cep: string | null
    nomeRepresentante: string | null
    cpfRepresentante: string | null
    email: string | null
    senha: string | null
  }

  export type InstituicaoCountAggregateOutputType = {
    id: number
    fotoPerfil: number
    nomeCompleto: number
    cnpj: number
    telefone: number
    endereco: number
    cep: number
    nomeRepresentante: number
    cpfRepresentante: number
    email: number
    senha: number
    _all: number
  }


  export type InstituicaoAvgAggregateInputType = {
    id?: true
  }

  export type InstituicaoSumAggregateInputType = {
    id?: true
  }

  export type InstituicaoMinAggregateInputType = {
    id?: true
    fotoPerfil?: true
    nomeCompleto?: true
    cnpj?: true
    telefone?: true
    endereco?: true
    cep?: true
    nomeRepresentante?: true
    cpfRepresentante?: true
    email?: true
    senha?: true
  }

  export type InstituicaoMaxAggregateInputType = {
    id?: true
    fotoPerfil?: true
    nomeCompleto?: true
    cnpj?: true
    telefone?: true
    endereco?: true
    cep?: true
    nomeRepresentante?: true
    cpfRepresentante?: true
    email?: true
    senha?: true
  }

  export type InstituicaoCountAggregateInputType = {
    id?: true
    fotoPerfil?: true
    nomeCompleto?: true
    cnpj?: true
    telefone?: true
    endereco?: true
    cep?: true
    nomeRepresentante?: true
    cpfRepresentante?: true
    email?: true
    senha?: true
    _all?: true
  }

  export type InstituicaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instituicao to aggregate.
     */
    where?: InstituicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instituicaos to fetch.
     */
    orderBy?: InstituicaoOrderByWithRelationInput | InstituicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstituicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instituicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instituicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instituicaos
    **/
    _count?: true | InstituicaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstituicaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstituicaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstituicaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstituicaoMaxAggregateInputType
  }

  export type GetInstituicaoAggregateType<T extends InstituicaoAggregateArgs> = {
        [P in keyof T & keyof AggregateInstituicao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstituicao[P]>
      : GetScalarType<T[P], AggregateInstituicao[P]>
  }




  export type InstituicaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstituicaoWhereInput
    orderBy?: InstituicaoOrderByWithAggregationInput | InstituicaoOrderByWithAggregationInput[]
    by: InstituicaoScalarFieldEnum[] | InstituicaoScalarFieldEnum
    having?: InstituicaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstituicaoCountAggregateInputType | true
    _avg?: InstituicaoAvgAggregateInputType
    _sum?: InstituicaoSumAggregateInputType
    _min?: InstituicaoMinAggregateInputType
    _max?: InstituicaoMaxAggregateInputType
  }

  export type InstituicaoGroupByOutputType = {
    id: number
    fotoPerfil: string | null
    nomeCompleto: string
    cnpj: string
    telefone: string | null
    endereco: string | null
    cep: string | null
    nomeRepresentante: string | null
    cpfRepresentante: string | null
    email: string
    senha: string
    _count: InstituicaoCountAggregateOutputType | null
    _avg: InstituicaoAvgAggregateOutputType | null
    _sum: InstituicaoSumAggregateOutputType | null
    _min: InstituicaoMinAggregateOutputType | null
    _max: InstituicaoMaxAggregateOutputType | null
  }

  type GetInstituicaoGroupByPayload<T extends InstituicaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstituicaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstituicaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstituicaoGroupByOutputType[P]>
            : GetScalarType<T[P], InstituicaoGroupByOutputType[P]>
        }
      >
    >


  export type InstituicaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fotoPerfil?: boolean
    nomeCompleto?: boolean
    cnpj?: boolean
    telefone?: boolean
    endereco?: boolean
    cep?: boolean
    nomeRepresentante?: boolean
    cpfRepresentante?: boolean
    email?: boolean
    senha?: boolean
  }, ExtArgs["result"]["instituicao"]>



  export type InstituicaoSelectScalar = {
    id?: boolean
    fotoPerfil?: boolean
    nomeCompleto?: boolean
    cnpj?: boolean
    telefone?: boolean
    endereco?: boolean
    cep?: boolean
    nomeRepresentante?: boolean
    cpfRepresentante?: boolean
    email?: boolean
    senha?: boolean
  }

  export type InstituicaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fotoPerfil" | "nomeCompleto" | "cnpj" | "telefone" | "endereco" | "cep" | "nomeRepresentante" | "cpfRepresentante" | "email" | "senha", ExtArgs["result"]["instituicao"]>

  export type $InstituicaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instituicao"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fotoPerfil: string | null
      nomeCompleto: string
      cnpj: string
      telefone: string | null
      endereco: string | null
      cep: string | null
      nomeRepresentante: string | null
      cpfRepresentante: string | null
      email: string
      senha: string
    }, ExtArgs["result"]["instituicao"]>
    composites: {}
  }

  type InstituicaoGetPayload<S extends boolean | null | undefined | InstituicaoDefaultArgs> = $Result.GetResult<Prisma.$InstituicaoPayload, S>

  type InstituicaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstituicaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstituicaoCountAggregateInputType | true
    }

  export interface InstituicaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instituicao'], meta: { name: 'Instituicao' } }
    /**
     * Find zero or one Instituicao that matches the filter.
     * @param {InstituicaoFindUniqueArgs} args - Arguments to find a Instituicao
     * @example
     * // Get one Instituicao
     * const instituicao = await prisma.instituicao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstituicaoFindUniqueArgs>(args: SelectSubset<T, InstituicaoFindUniqueArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instituicao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstituicaoFindUniqueOrThrowArgs} args - Arguments to find a Instituicao
     * @example
     * // Get one Instituicao
     * const instituicao = await prisma.instituicao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstituicaoFindUniqueOrThrowArgs>(args: SelectSubset<T, InstituicaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instituicao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoFindFirstArgs} args - Arguments to find a Instituicao
     * @example
     * // Get one Instituicao
     * const instituicao = await prisma.instituicao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstituicaoFindFirstArgs>(args?: SelectSubset<T, InstituicaoFindFirstArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instituicao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoFindFirstOrThrowArgs} args - Arguments to find a Instituicao
     * @example
     * // Get one Instituicao
     * const instituicao = await prisma.instituicao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstituicaoFindFirstOrThrowArgs>(args?: SelectSubset<T, InstituicaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instituicaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instituicaos
     * const instituicaos = await prisma.instituicao.findMany()
     * 
     * // Get first 10 Instituicaos
     * const instituicaos = await prisma.instituicao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instituicaoWithIdOnly = await prisma.instituicao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstituicaoFindManyArgs>(args?: SelectSubset<T, InstituicaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instituicao.
     * @param {InstituicaoCreateArgs} args - Arguments to create a Instituicao.
     * @example
     * // Create one Instituicao
     * const Instituicao = await prisma.instituicao.create({
     *   data: {
     *     // ... data to create a Instituicao
     *   }
     * })
     * 
     */
    create<T extends InstituicaoCreateArgs>(args: SelectSubset<T, InstituicaoCreateArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instituicaos.
     * @param {InstituicaoCreateManyArgs} args - Arguments to create many Instituicaos.
     * @example
     * // Create many Instituicaos
     * const instituicao = await prisma.instituicao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstituicaoCreateManyArgs>(args?: SelectSubset<T, InstituicaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Instituicao.
     * @param {InstituicaoDeleteArgs} args - Arguments to delete one Instituicao.
     * @example
     * // Delete one Instituicao
     * const Instituicao = await prisma.instituicao.delete({
     *   where: {
     *     // ... filter to delete one Instituicao
     *   }
     * })
     * 
     */
    delete<T extends InstituicaoDeleteArgs>(args: SelectSubset<T, InstituicaoDeleteArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instituicao.
     * @param {InstituicaoUpdateArgs} args - Arguments to update one Instituicao.
     * @example
     * // Update one Instituicao
     * const instituicao = await prisma.instituicao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstituicaoUpdateArgs>(args: SelectSubset<T, InstituicaoUpdateArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instituicaos.
     * @param {InstituicaoDeleteManyArgs} args - Arguments to filter Instituicaos to delete.
     * @example
     * // Delete a few Instituicaos
     * const { count } = await prisma.instituicao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstituicaoDeleteManyArgs>(args?: SelectSubset<T, InstituicaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instituicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instituicaos
     * const instituicao = await prisma.instituicao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstituicaoUpdateManyArgs>(args: SelectSubset<T, InstituicaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Instituicao.
     * @param {InstituicaoUpsertArgs} args - Arguments to update or create a Instituicao.
     * @example
     * // Update or create a Instituicao
     * const instituicao = await prisma.instituicao.upsert({
     *   create: {
     *     // ... data to create a Instituicao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instituicao we want to update
     *   }
     * })
     */
    upsert<T extends InstituicaoUpsertArgs>(args: SelectSubset<T, InstituicaoUpsertArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instituicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoCountArgs} args - Arguments to filter Instituicaos to count.
     * @example
     * // Count the number of Instituicaos
     * const count = await prisma.instituicao.count({
     *   where: {
     *     // ... the filter for the Instituicaos we want to count
     *   }
     * })
    **/
    count<T extends InstituicaoCountArgs>(
      args?: Subset<T, InstituicaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstituicaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instituicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstituicaoAggregateArgs>(args: Subset<T, InstituicaoAggregateArgs>): Prisma.PrismaPromise<GetInstituicaoAggregateType<T>>

    /**
     * Group by Instituicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstituicaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstituicaoGroupByArgs['orderBy'] }
        : { orderBy?: InstituicaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstituicaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstituicaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instituicao model
   */
  readonly fields: InstituicaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instituicao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstituicaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Instituicao model
   */
  interface InstituicaoFieldRefs {
    readonly id: FieldRef<"Instituicao", 'Int'>
    readonly fotoPerfil: FieldRef<"Instituicao", 'String'>
    readonly nomeCompleto: FieldRef<"Instituicao", 'String'>
    readonly cnpj: FieldRef<"Instituicao", 'String'>
    readonly telefone: FieldRef<"Instituicao", 'String'>
    readonly endereco: FieldRef<"Instituicao", 'String'>
    readonly cep: FieldRef<"Instituicao", 'String'>
    readonly nomeRepresentante: FieldRef<"Instituicao", 'String'>
    readonly cpfRepresentante: FieldRef<"Instituicao", 'String'>
    readonly email: FieldRef<"Instituicao", 'String'>
    readonly senha: FieldRef<"Instituicao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Instituicao findUnique
   */
  export type InstituicaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Filter, which Instituicao to fetch.
     */
    where: InstituicaoWhereUniqueInput
  }

  /**
   * Instituicao findUniqueOrThrow
   */
  export type InstituicaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Filter, which Instituicao to fetch.
     */
    where: InstituicaoWhereUniqueInput
  }

  /**
   * Instituicao findFirst
   */
  export type InstituicaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Filter, which Instituicao to fetch.
     */
    where?: InstituicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instituicaos to fetch.
     */
    orderBy?: InstituicaoOrderByWithRelationInput | InstituicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instituicaos.
     */
    cursor?: InstituicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instituicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instituicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instituicaos.
     */
    distinct?: InstituicaoScalarFieldEnum | InstituicaoScalarFieldEnum[]
  }

  /**
   * Instituicao findFirstOrThrow
   */
  export type InstituicaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Filter, which Instituicao to fetch.
     */
    where?: InstituicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instituicaos to fetch.
     */
    orderBy?: InstituicaoOrderByWithRelationInput | InstituicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instituicaos.
     */
    cursor?: InstituicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instituicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instituicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instituicaos.
     */
    distinct?: InstituicaoScalarFieldEnum | InstituicaoScalarFieldEnum[]
  }

  /**
   * Instituicao findMany
   */
  export type InstituicaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Filter, which Instituicaos to fetch.
     */
    where?: InstituicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instituicaos to fetch.
     */
    orderBy?: InstituicaoOrderByWithRelationInput | InstituicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instituicaos.
     */
    cursor?: InstituicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instituicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instituicaos.
     */
    skip?: number
    distinct?: InstituicaoScalarFieldEnum | InstituicaoScalarFieldEnum[]
  }

  /**
   * Instituicao create
   */
  export type InstituicaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * The data needed to create a Instituicao.
     */
    data: XOR<InstituicaoCreateInput, InstituicaoUncheckedCreateInput>
  }

  /**
   * Instituicao createMany
   */
  export type InstituicaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instituicaos.
     */
    data: InstituicaoCreateManyInput | InstituicaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instituicao update
   */
  export type InstituicaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * The data needed to update a Instituicao.
     */
    data: XOR<InstituicaoUpdateInput, InstituicaoUncheckedUpdateInput>
    /**
     * Choose, which Instituicao to update.
     */
    where: InstituicaoWhereUniqueInput
  }

  /**
   * Instituicao updateMany
   */
  export type InstituicaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instituicaos.
     */
    data: XOR<InstituicaoUpdateManyMutationInput, InstituicaoUncheckedUpdateManyInput>
    /**
     * Filter which Instituicaos to update
     */
    where?: InstituicaoWhereInput
    /**
     * Limit how many Instituicaos to update.
     */
    limit?: number
  }

  /**
   * Instituicao upsert
   */
  export type InstituicaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * The filter to search for the Instituicao to update in case it exists.
     */
    where: InstituicaoWhereUniqueInput
    /**
     * In case the Instituicao found by the `where` argument doesn't exist, create a new Instituicao with this data.
     */
    create: XOR<InstituicaoCreateInput, InstituicaoUncheckedCreateInput>
    /**
     * In case the Instituicao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstituicaoUpdateInput, InstituicaoUncheckedUpdateInput>
  }

  /**
   * Instituicao delete
   */
  export type InstituicaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Filter which Instituicao to delete.
     */
    where: InstituicaoWhereUniqueInput
  }

  /**
   * Instituicao deleteMany
   */
  export type InstituicaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instituicaos to delete
     */
    where?: InstituicaoWhereInput
    /**
     * Limit how many Instituicaos to delete.
     */
    limit?: number
  }

  /**
   * Instituicao without action
   */
  export type InstituicaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
  }


  /**
   * Model Curso
   */

  export type AggregateCurso = {
    _count: CursoCountAggregateOutputType | null
    _avg: CursoAvgAggregateOutputType | null
    _sum: CursoSumAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  export type CursoAvgAggregateOutputType = {
    id: number | null
  }

  export type CursoSumAggregateOutputType = {
    id: number | null
  }

  export type CursoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    createdAt: Date | null
  }

  export type CursoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    createdAt: Date | null
  }

  export type CursoCountAggregateOutputType = {
    id: number
    nome: number
    createdAt: number
    _all: number
  }


  export type CursoAvgAggregateInputType = {
    id?: true
  }

  export type CursoSumAggregateInputType = {
    id?: true
  }

  export type CursoMinAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
  }

  export type CursoMaxAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
  }

  export type CursoCountAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    _all?: true
  }

  export type CursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curso to aggregate.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cursos
    **/
    _count?: true | CursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CursoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CursoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursoMaxAggregateInputType
  }

  export type GetCursoAggregateType<T extends CursoAggregateArgs> = {
        [P in keyof T & keyof AggregateCurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurso[P]>
      : GetScalarType<T[P], AggregateCurso[P]>
  }




  export type CursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursoWhereInput
    orderBy?: CursoOrderByWithAggregationInput | CursoOrderByWithAggregationInput[]
    by: CursoScalarFieldEnum[] | CursoScalarFieldEnum
    having?: CursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursoCountAggregateInputType | true
    _avg?: CursoAvgAggregateInputType
    _sum?: CursoSumAggregateInputType
    _min?: CursoMinAggregateInputType
    _max?: CursoMaxAggregateInputType
  }

  export type CursoGroupByOutputType = {
    id: number
    nome: string
    createdAt: Date
    _count: CursoCountAggregateOutputType | null
    _avg: CursoAvgAggregateOutputType | null
    _sum: CursoSumAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  type GetCursoGroupByPayload<T extends CursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursoGroupByOutputType[P]>
            : GetScalarType<T[P], CursoGroupByOutputType[P]>
        }
      >
    >


  export type CursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    matriculas?: boolean | Curso$matriculasArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curso"]>



  export type CursoSelectScalar = {
    id?: boolean
    nome?: boolean
    createdAt?: boolean
  }

  export type CursoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "createdAt", ExtArgs["result"]["curso"]>
  export type CursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matriculas?: boolean | Curso$matriculasArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Curso"
    objects: {
      matriculas: Prisma.$MatriculaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      createdAt: Date
    }, ExtArgs["result"]["curso"]>
    composites: {}
  }

  type CursoGetPayload<S extends boolean | null | undefined | CursoDefaultArgs> = $Result.GetResult<Prisma.$CursoPayload, S>

  type CursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CursoCountAggregateInputType | true
    }

  export interface CursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Curso'], meta: { name: 'Curso' } }
    /**
     * Find zero or one Curso that matches the filter.
     * @param {CursoFindUniqueArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CursoFindUniqueArgs>(args: SelectSubset<T, CursoFindUniqueArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Curso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CursoFindUniqueOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CursoFindUniqueOrThrowArgs>(args: SelectSubset<T, CursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CursoFindFirstArgs>(args?: SelectSubset<T, CursoFindFirstArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CursoFindFirstOrThrowArgs>(args?: SelectSubset<T, CursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursos
     * const cursos = await prisma.curso.findMany()
     * 
     * // Get first 10 Cursos
     * const cursos = await prisma.curso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cursoWithIdOnly = await prisma.curso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CursoFindManyArgs>(args?: SelectSubset<T, CursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Curso.
     * @param {CursoCreateArgs} args - Arguments to create a Curso.
     * @example
     * // Create one Curso
     * const Curso = await prisma.curso.create({
     *   data: {
     *     // ... data to create a Curso
     *   }
     * })
     * 
     */
    create<T extends CursoCreateArgs>(args: SelectSubset<T, CursoCreateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cursos.
     * @param {CursoCreateManyArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CursoCreateManyArgs>(args?: SelectSubset<T, CursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Curso.
     * @param {CursoDeleteArgs} args - Arguments to delete one Curso.
     * @example
     * // Delete one Curso
     * const Curso = await prisma.curso.delete({
     *   where: {
     *     // ... filter to delete one Curso
     *   }
     * })
     * 
     */
    delete<T extends CursoDeleteArgs>(args: SelectSubset<T, CursoDeleteArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Curso.
     * @param {CursoUpdateArgs} args - Arguments to update one Curso.
     * @example
     * // Update one Curso
     * const curso = await prisma.curso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CursoUpdateArgs>(args: SelectSubset<T, CursoUpdateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cursos.
     * @param {CursoDeleteManyArgs} args - Arguments to filter Cursos to delete.
     * @example
     * // Delete a few Cursos
     * const { count } = await prisma.curso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CursoDeleteManyArgs>(args?: SelectSubset<T, CursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CursoUpdateManyArgs>(args: SelectSubset<T, CursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Curso.
     * @param {CursoUpsertArgs} args - Arguments to update or create a Curso.
     * @example
     * // Update or create a Curso
     * const curso = await prisma.curso.upsert({
     *   create: {
     *     // ... data to create a Curso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curso we want to update
     *   }
     * })
     */
    upsert<T extends CursoUpsertArgs>(args: SelectSubset<T, CursoUpsertArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoCountArgs} args - Arguments to filter Cursos to count.
     * @example
     * // Count the number of Cursos
     * const count = await prisma.curso.count({
     *   where: {
     *     // ... the filter for the Cursos we want to count
     *   }
     * })
    **/
    count<T extends CursoCountArgs>(
      args?: Subset<T, CursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CursoAggregateArgs>(args: Subset<T, CursoAggregateArgs>): Prisma.PrismaPromise<GetCursoAggregateType<T>>

    /**
     * Group by Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CursoGroupByArgs['orderBy'] }
        : { orderBy?: CursoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Curso model
   */
  readonly fields: CursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Curso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matriculas<T extends Curso$matriculasArgs<ExtArgs> = {}>(args?: Subset<T, Curso$matriculasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Curso model
   */
  interface CursoFieldRefs {
    readonly id: FieldRef<"Curso", 'Int'>
    readonly nome: FieldRef<"Curso", 'String'>
    readonly createdAt: FieldRef<"Curso", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Curso findUnique
   */
  export type CursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findUniqueOrThrow
   */
  export type CursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findFirst
   */
  export type CursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findFirstOrThrow
   */
  export type CursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findMany
   */
  export type CursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Cursos to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso create
   */
  export type CursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to create a Curso.
     */
    data: XOR<CursoCreateInput, CursoUncheckedCreateInput>
  }

  /**
   * Curso createMany
   */
  export type CursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cursos.
     */
    data: CursoCreateManyInput | CursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Curso update
   */
  export type CursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to update a Curso.
     */
    data: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
    /**
     * Choose, which Curso to update.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso updateMany
   */
  export type CursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cursos.
     */
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyInput>
    /**
     * Filter which Cursos to update
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to update.
     */
    limit?: number
  }

  /**
   * Curso upsert
   */
  export type CursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The filter to search for the Curso to update in case it exists.
     */
    where: CursoWhereUniqueInput
    /**
     * In case the Curso found by the `where` argument doesn't exist, create a new Curso with this data.
     */
    create: XOR<CursoCreateInput, CursoUncheckedCreateInput>
    /**
     * In case the Curso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
  }

  /**
   * Curso delete
   */
  export type CursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter which Curso to delete.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso deleteMany
   */
  export type CursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cursos to delete
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to delete.
     */
    limit?: number
  }

  /**
   * Curso.matriculas
   */
  export type Curso$matriculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    where?: MatriculaWhereInput
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    cursor?: MatriculaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatriculaScalarFieldEnum | MatriculaScalarFieldEnum[]
  }

  /**
   * Curso without action
   */
  export type CursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
  }


  /**
   * Model Pessoa
   */

  export type AggregatePessoa = {
    _count: PessoaCountAggregateOutputType | null
    _avg: PessoaAvgAggregateOutputType | null
    _sum: PessoaSumAggregateOutputType | null
    _min: PessoaMinAggregateOutputType | null
    _max: PessoaMaxAggregateOutputType | null
  }

  export type PessoaAvgAggregateOutputType = {
    id: number | null
  }

  export type PessoaSumAggregateOutputType = {
    id: number | null
  }

  export type PessoaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    cpf: string | null
    email: string | null
    createdAt: Date | null
  }

  export type PessoaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    cpf: string | null
    email: string | null
    createdAt: Date | null
  }

  export type PessoaCountAggregateOutputType = {
    id: number
    nome: number
    cpf: number
    email: number
    createdAt: number
    _all: number
  }


  export type PessoaAvgAggregateInputType = {
    id?: true
  }

  export type PessoaSumAggregateInputType = {
    id?: true
  }

  export type PessoaMinAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    email?: true
    createdAt?: true
  }

  export type PessoaMaxAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    email?: true
    createdAt?: true
  }

  export type PessoaCountAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    email?: true
    createdAt?: true
    _all?: true
  }

  export type PessoaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pessoa to aggregate.
     */
    where?: PessoaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pessoas to fetch.
     */
    orderBy?: PessoaOrderByWithRelationInput | PessoaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PessoaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pessoas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pessoas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pessoas
    **/
    _count?: true | PessoaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PessoaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PessoaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PessoaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PessoaMaxAggregateInputType
  }

  export type GetPessoaAggregateType<T extends PessoaAggregateArgs> = {
        [P in keyof T & keyof AggregatePessoa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePessoa[P]>
      : GetScalarType<T[P], AggregatePessoa[P]>
  }




  export type PessoaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PessoaWhereInput
    orderBy?: PessoaOrderByWithAggregationInput | PessoaOrderByWithAggregationInput[]
    by: PessoaScalarFieldEnum[] | PessoaScalarFieldEnum
    having?: PessoaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PessoaCountAggregateInputType | true
    _avg?: PessoaAvgAggregateInputType
    _sum?: PessoaSumAggregateInputType
    _min?: PessoaMinAggregateInputType
    _max?: PessoaMaxAggregateInputType
  }

  export type PessoaGroupByOutputType = {
    id: number
    nome: string
    cpf: string
    email: string
    createdAt: Date
    _count: PessoaCountAggregateOutputType | null
    _avg: PessoaAvgAggregateOutputType | null
    _sum: PessoaSumAggregateOutputType | null
    _min: PessoaMinAggregateOutputType | null
    _max: PessoaMaxAggregateOutputType | null
  }

  type GetPessoaGroupByPayload<T extends PessoaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PessoaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PessoaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PessoaGroupByOutputType[P]>
            : GetScalarType<T[P], PessoaGroupByOutputType[P]>
        }
      >
    >


  export type PessoaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    email?: boolean
    createdAt?: boolean
    matriculas?: boolean | Pessoa$matriculasArgs<ExtArgs>
    _count?: boolean | PessoaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pessoa"]>



  export type PessoaSelectScalar = {
    id?: boolean
    nome?: boolean
    cpf?: boolean
    email?: boolean
    createdAt?: boolean
  }

  export type PessoaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cpf" | "email" | "createdAt", ExtArgs["result"]["pessoa"]>
  export type PessoaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matriculas?: boolean | Pessoa$matriculasArgs<ExtArgs>
    _count?: boolean | PessoaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PessoaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pessoa"
    objects: {
      matriculas: Prisma.$MatriculaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      cpf: string
      email: string
      createdAt: Date
    }, ExtArgs["result"]["pessoa"]>
    composites: {}
  }

  type PessoaGetPayload<S extends boolean | null | undefined | PessoaDefaultArgs> = $Result.GetResult<Prisma.$PessoaPayload, S>

  type PessoaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PessoaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PessoaCountAggregateInputType | true
    }

  export interface PessoaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pessoa'], meta: { name: 'Pessoa' } }
    /**
     * Find zero or one Pessoa that matches the filter.
     * @param {PessoaFindUniqueArgs} args - Arguments to find a Pessoa
     * @example
     * // Get one Pessoa
     * const pessoa = await prisma.pessoa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PessoaFindUniqueArgs>(args: SelectSubset<T, PessoaFindUniqueArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pessoa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PessoaFindUniqueOrThrowArgs} args - Arguments to find a Pessoa
     * @example
     * // Get one Pessoa
     * const pessoa = await prisma.pessoa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PessoaFindUniqueOrThrowArgs>(args: SelectSubset<T, PessoaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pessoa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaFindFirstArgs} args - Arguments to find a Pessoa
     * @example
     * // Get one Pessoa
     * const pessoa = await prisma.pessoa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PessoaFindFirstArgs>(args?: SelectSubset<T, PessoaFindFirstArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pessoa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaFindFirstOrThrowArgs} args - Arguments to find a Pessoa
     * @example
     * // Get one Pessoa
     * const pessoa = await prisma.pessoa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PessoaFindFirstOrThrowArgs>(args?: SelectSubset<T, PessoaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pessoas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pessoas
     * const pessoas = await prisma.pessoa.findMany()
     * 
     * // Get first 10 Pessoas
     * const pessoas = await prisma.pessoa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pessoaWithIdOnly = await prisma.pessoa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PessoaFindManyArgs>(args?: SelectSubset<T, PessoaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pessoa.
     * @param {PessoaCreateArgs} args - Arguments to create a Pessoa.
     * @example
     * // Create one Pessoa
     * const Pessoa = await prisma.pessoa.create({
     *   data: {
     *     // ... data to create a Pessoa
     *   }
     * })
     * 
     */
    create<T extends PessoaCreateArgs>(args: SelectSubset<T, PessoaCreateArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pessoas.
     * @param {PessoaCreateManyArgs} args - Arguments to create many Pessoas.
     * @example
     * // Create many Pessoas
     * const pessoa = await prisma.pessoa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PessoaCreateManyArgs>(args?: SelectSubset<T, PessoaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pessoa.
     * @param {PessoaDeleteArgs} args - Arguments to delete one Pessoa.
     * @example
     * // Delete one Pessoa
     * const Pessoa = await prisma.pessoa.delete({
     *   where: {
     *     // ... filter to delete one Pessoa
     *   }
     * })
     * 
     */
    delete<T extends PessoaDeleteArgs>(args: SelectSubset<T, PessoaDeleteArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pessoa.
     * @param {PessoaUpdateArgs} args - Arguments to update one Pessoa.
     * @example
     * // Update one Pessoa
     * const pessoa = await prisma.pessoa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PessoaUpdateArgs>(args: SelectSubset<T, PessoaUpdateArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pessoas.
     * @param {PessoaDeleteManyArgs} args - Arguments to filter Pessoas to delete.
     * @example
     * // Delete a few Pessoas
     * const { count } = await prisma.pessoa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PessoaDeleteManyArgs>(args?: SelectSubset<T, PessoaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pessoas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pessoas
     * const pessoa = await prisma.pessoa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PessoaUpdateManyArgs>(args: SelectSubset<T, PessoaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pessoa.
     * @param {PessoaUpsertArgs} args - Arguments to update or create a Pessoa.
     * @example
     * // Update or create a Pessoa
     * const pessoa = await prisma.pessoa.upsert({
     *   create: {
     *     // ... data to create a Pessoa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pessoa we want to update
     *   }
     * })
     */
    upsert<T extends PessoaUpsertArgs>(args: SelectSubset<T, PessoaUpsertArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pessoas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaCountArgs} args - Arguments to filter Pessoas to count.
     * @example
     * // Count the number of Pessoas
     * const count = await prisma.pessoa.count({
     *   where: {
     *     // ... the filter for the Pessoas we want to count
     *   }
     * })
    **/
    count<T extends PessoaCountArgs>(
      args?: Subset<T, PessoaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PessoaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pessoa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PessoaAggregateArgs>(args: Subset<T, PessoaAggregateArgs>): Prisma.PrismaPromise<GetPessoaAggregateType<T>>

    /**
     * Group by Pessoa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PessoaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PessoaGroupByArgs['orderBy'] }
        : { orderBy?: PessoaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PessoaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPessoaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pessoa model
   */
  readonly fields: PessoaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pessoa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PessoaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matriculas<T extends Pessoa$matriculasArgs<ExtArgs> = {}>(args?: Subset<T, Pessoa$matriculasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pessoa model
   */
  interface PessoaFieldRefs {
    readonly id: FieldRef<"Pessoa", 'Int'>
    readonly nome: FieldRef<"Pessoa", 'String'>
    readonly cpf: FieldRef<"Pessoa", 'String'>
    readonly email: FieldRef<"Pessoa", 'String'>
    readonly createdAt: FieldRef<"Pessoa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pessoa findUnique
   */
  export type PessoaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * Filter, which Pessoa to fetch.
     */
    where: PessoaWhereUniqueInput
  }

  /**
   * Pessoa findUniqueOrThrow
   */
  export type PessoaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * Filter, which Pessoa to fetch.
     */
    where: PessoaWhereUniqueInput
  }

  /**
   * Pessoa findFirst
   */
  export type PessoaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * Filter, which Pessoa to fetch.
     */
    where?: PessoaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pessoas to fetch.
     */
    orderBy?: PessoaOrderByWithRelationInput | PessoaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pessoas.
     */
    cursor?: PessoaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pessoas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pessoas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pessoas.
     */
    distinct?: PessoaScalarFieldEnum | PessoaScalarFieldEnum[]
  }

  /**
   * Pessoa findFirstOrThrow
   */
  export type PessoaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * Filter, which Pessoa to fetch.
     */
    where?: PessoaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pessoas to fetch.
     */
    orderBy?: PessoaOrderByWithRelationInput | PessoaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pessoas.
     */
    cursor?: PessoaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pessoas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pessoas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pessoas.
     */
    distinct?: PessoaScalarFieldEnum | PessoaScalarFieldEnum[]
  }

  /**
   * Pessoa findMany
   */
  export type PessoaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * Filter, which Pessoas to fetch.
     */
    where?: PessoaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pessoas to fetch.
     */
    orderBy?: PessoaOrderByWithRelationInput | PessoaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pessoas.
     */
    cursor?: PessoaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pessoas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pessoas.
     */
    skip?: number
    distinct?: PessoaScalarFieldEnum | PessoaScalarFieldEnum[]
  }

  /**
   * Pessoa create
   */
  export type PessoaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * The data needed to create a Pessoa.
     */
    data: XOR<PessoaCreateInput, PessoaUncheckedCreateInput>
  }

  /**
   * Pessoa createMany
   */
  export type PessoaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pessoas.
     */
    data: PessoaCreateManyInput | PessoaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pessoa update
   */
  export type PessoaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * The data needed to update a Pessoa.
     */
    data: XOR<PessoaUpdateInput, PessoaUncheckedUpdateInput>
    /**
     * Choose, which Pessoa to update.
     */
    where: PessoaWhereUniqueInput
  }

  /**
   * Pessoa updateMany
   */
  export type PessoaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pessoas.
     */
    data: XOR<PessoaUpdateManyMutationInput, PessoaUncheckedUpdateManyInput>
    /**
     * Filter which Pessoas to update
     */
    where?: PessoaWhereInput
    /**
     * Limit how many Pessoas to update.
     */
    limit?: number
  }

  /**
   * Pessoa upsert
   */
  export type PessoaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * The filter to search for the Pessoa to update in case it exists.
     */
    where: PessoaWhereUniqueInput
    /**
     * In case the Pessoa found by the `where` argument doesn't exist, create a new Pessoa with this data.
     */
    create: XOR<PessoaCreateInput, PessoaUncheckedCreateInput>
    /**
     * In case the Pessoa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PessoaUpdateInput, PessoaUncheckedUpdateInput>
  }

  /**
   * Pessoa delete
   */
  export type PessoaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * Filter which Pessoa to delete.
     */
    where: PessoaWhereUniqueInput
  }

  /**
   * Pessoa deleteMany
   */
  export type PessoaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pessoas to delete
     */
    where?: PessoaWhereInput
    /**
     * Limit how many Pessoas to delete.
     */
    limit?: number
  }

  /**
   * Pessoa.matriculas
   */
  export type Pessoa$matriculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    where?: MatriculaWhereInput
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    cursor?: MatriculaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatriculaScalarFieldEnum | MatriculaScalarFieldEnum[]
  }

  /**
   * Pessoa without action
   */
  export type PessoaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
  }


  /**
   * Model Matricula
   */

  export type AggregateMatricula = {
    _count: MatriculaCountAggregateOutputType | null
    _avg: MatriculaAvgAggregateOutputType | null
    _sum: MatriculaSumAggregateOutputType | null
    _min: MatriculaMinAggregateOutputType | null
    _max: MatriculaMaxAggregateOutputType | null
  }

  export type MatriculaAvgAggregateOutputType = {
    id: number | null
    cursoId: number | null
    pessoaId: number | null
  }

  export type MatriculaSumAggregateOutputType = {
    id: number | null
    cursoId: number | null
    pessoaId: number | null
  }

  export type MatriculaMinAggregateOutputType = {
    id: number | null
    cursoId: number | null
    pessoaId: number | null
    anoSemestreEntrada: string | null
    anoSemestreSaida: string | null
  }

  export type MatriculaMaxAggregateOutputType = {
    id: number | null
    cursoId: number | null
    pessoaId: number | null
    anoSemestreEntrada: string | null
    anoSemestreSaida: string | null
  }

  export type MatriculaCountAggregateOutputType = {
    id: number
    cursoId: number
    pessoaId: number
    anoSemestreEntrada: number
    anoSemestreSaida: number
    _all: number
  }


  export type MatriculaAvgAggregateInputType = {
    id?: true
    cursoId?: true
    pessoaId?: true
  }

  export type MatriculaSumAggregateInputType = {
    id?: true
    cursoId?: true
    pessoaId?: true
  }

  export type MatriculaMinAggregateInputType = {
    id?: true
    cursoId?: true
    pessoaId?: true
    anoSemestreEntrada?: true
    anoSemestreSaida?: true
  }

  export type MatriculaMaxAggregateInputType = {
    id?: true
    cursoId?: true
    pessoaId?: true
    anoSemestreEntrada?: true
    anoSemestreSaida?: true
  }

  export type MatriculaCountAggregateInputType = {
    id?: true
    cursoId?: true
    pessoaId?: true
    anoSemestreEntrada?: true
    anoSemestreSaida?: true
    _all?: true
  }

  export type MatriculaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matricula to aggregate.
     */
    where?: MatriculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matriculas to fetch.
     */
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatriculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matriculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matriculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matriculas
    **/
    _count?: true | MatriculaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatriculaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatriculaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatriculaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatriculaMaxAggregateInputType
  }

  export type GetMatriculaAggregateType<T extends MatriculaAggregateArgs> = {
        [P in keyof T & keyof AggregateMatricula]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatricula[P]>
      : GetScalarType<T[P], AggregateMatricula[P]>
  }




  export type MatriculaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatriculaWhereInput
    orderBy?: MatriculaOrderByWithAggregationInput | MatriculaOrderByWithAggregationInput[]
    by: MatriculaScalarFieldEnum[] | MatriculaScalarFieldEnum
    having?: MatriculaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatriculaCountAggregateInputType | true
    _avg?: MatriculaAvgAggregateInputType
    _sum?: MatriculaSumAggregateInputType
    _min?: MatriculaMinAggregateInputType
    _max?: MatriculaMaxAggregateInputType
  }

  export type MatriculaGroupByOutputType = {
    id: number
    cursoId: number
    pessoaId: number
    anoSemestreEntrada: string
    anoSemestreSaida: string | null
    _count: MatriculaCountAggregateOutputType | null
    _avg: MatriculaAvgAggregateOutputType | null
    _sum: MatriculaSumAggregateOutputType | null
    _min: MatriculaMinAggregateOutputType | null
    _max: MatriculaMaxAggregateOutputType | null
  }

  type GetMatriculaGroupByPayload<T extends MatriculaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatriculaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatriculaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatriculaGroupByOutputType[P]>
            : GetScalarType<T[P], MatriculaGroupByOutputType[P]>
        }
      >
    >


  export type MatriculaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cursoId?: boolean
    pessoaId?: boolean
    anoSemestreEntrada?: boolean
    anoSemestreSaida?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    pessoa?: boolean | PessoaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matricula"]>



  export type MatriculaSelectScalar = {
    id?: boolean
    cursoId?: boolean
    pessoaId?: boolean
    anoSemestreEntrada?: boolean
    anoSemestreSaida?: boolean
  }

  export type MatriculaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cursoId" | "pessoaId" | "anoSemestreEntrada" | "anoSemestreSaida", ExtArgs["result"]["matricula"]>
  export type MatriculaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    pessoa?: boolean | PessoaDefaultArgs<ExtArgs>
  }

  export type $MatriculaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Matricula"
    objects: {
      curso: Prisma.$CursoPayload<ExtArgs>
      pessoa: Prisma.$PessoaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cursoId: number
      pessoaId: number
      anoSemestreEntrada: string
      anoSemestreSaida: string | null
    }, ExtArgs["result"]["matricula"]>
    composites: {}
  }

  type MatriculaGetPayload<S extends boolean | null | undefined | MatriculaDefaultArgs> = $Result.GetResult<Prisma.$MatriculaPayload, S>

  type MatriculaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatriculaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatriculaCountAggregateInputType | true
    }

  export interface MatriculaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Matricula'], meta: { name: 'Matricula' } }
    /**
     * Find zero or one Matricula that matches the filter.
     * @param {MatriculaFindUniqueArgs} args - Arguments to find a Matricula
     * @example
     * // Get one Matricula
     * const matricula = await prisma.matricula.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatriculaFindUniqueArgs>(args: SelectSubset<T, MatriculaFindUniqueArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Matricula that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatriculaFindUniqueOrThrowArgs} args - Arguments to find a Matricula
     * @example
     * // Get one Matricula
     * const matricula = await prisma.matricula.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatriculaFindUniqueOrThrowArgs>(args: SelectSubset<T, MatriculaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matricula that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaFindFirstArgs} args - Arguments to find a Matricula
     * @example
     * // Get one Matricula
     * const matricula = await prisma.matricula.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatriculaFindFirstArgs>(args?: SelectSubset<T, MatriculaFindFirstArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matricula that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaFindFirstOrThrowArgs} args - Arguments to find a Matricula
     * @example
     * // Get one Matricula
     * const matricula = await prisma.matricula.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatriculaFindFirstOrThrowArgs>(args?: SelectSubset<T, MatriculaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matriculas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matriculas
     * const matriculas = await prisma.matricula.findMany()
     * 
     * // Get first 10 Matriculas
     * const matriculas = await prisma.matricula.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matriculaWithIdOnly = await prisma.matricula.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatriculaFindManyArgs>(args?: SelectSubset<T, MatriculaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Matricula.
     * @param {MatriculaCreateArgs} args - Arguments to create a Matricula.
     * @example
     * // Create one Matricula
     * const Matricula = await prisma.matricula.create({
     *   data: {
     *     // ... data to create a Matricula
     *   }
     * })
     * 
     */
    create<T extends MatriculaCreateArgs>(args: SelectSubset<T, MatriculaCreateArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matriculas.
     * @param {MatriculaCreateManyArgs} args - Arguments to create many Matriculas.
     * @example
     * // Create many Matriculas
     * const matricula = await prisma.matricula.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatriculaCreateManyArgs>(args?: SelectSubset<T, MatriculaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Matricula.
     * @param {MatriculaDeleteArgs} args - Arguments to delete one Matricula.
     * @example
     * // Delete one Matricula
     * const Matricula = await prisma.matricula.delete({
     *   where: {
     *     // ... filter to delete one Matricula
     *   }
     * })
     * 
     */
    delete<T extends MatriculaDeleteArgs>(args: SelectSubset<T, MatriculaDeleteArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Matricula.
     * @param {MatriculaUpdateArgs} args - Arguments to update one Matricula.
     * @example
     * // Update one Matricula
     * const matricula = await prisma.matricula.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatriculaUpdateArgs>(args: SelectSubset<T, MatriculaUpdateArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matriculas.
     * @param {MatriculaDeleteManyArgs} args - Arguments to filter Matriculas to delete.
     * @example
     * // Delete a few Matriculas
     * const { count } = await prisma.matricula.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatriculaDeleteManyArgs>(args?: SelectSubset<T, MatriculaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matriculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matriculas
     * const matricula = await prisma.matricula.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatriculaUpdateManyArgs>(args: SelectSubset<T, MatriculaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Matricula.
     * @param {MatriculaUpsertArgs} args - Arguments to update or create a Matricula.
     * @example
     * // Update or create a Matricula
     * const matricula = await prisma.matricula.upsert({
     *   create: {
     *     // ... data to create a Matricula
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matricula we want to update
     *   }
     * })
     */
    upsert<T extends MatriculaUpsertArgs>(args: SelectSubset<T, MatriculaUpsertArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matriculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaCountArgs} args - Arguments to filter Matriculas to count.
     * @example
     * // Count the number of Matriculas
     * const count = await prisma.matricula.count({
     *   where: {
     *     // ... the filter for the Matriculas we want to count
     *   }
     * })
    **/
    count<T extends MatriculaCountArgs>(
      args?: Subset<T, MatriculaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatriculaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matricula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatriculaAggregateArgs>(args: Subset<T, MatriculaAggregateArgs>): Prisma.PrismaPromise<GetMatriculaAggregateType<T>>

    /**
     * Group by Matricula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatriculaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatriculaGroupByArgs['orderBy'] }
        : { orderBy?: MatriculaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatriculaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatriculaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Matricula model
   */
  readonly fields: MatriculaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Matricula.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatriculaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pessoa<T extends PessoaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PessoaDefaultArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Matricula model
   */
  interface MatriculaFieldRefs {
    readonly id: FieldRef<"Matricula", 'Int'>
    readonly cursoId: FieldRef<"Matricula", 'Int'>
    readonly pessoaId: FieldRef<"Matricula", 'Int'>
    readonly anoSemestreEntrada: FieldRef<"Matricula", 'String'>
    readonly anoSemestreSaida: FieldRef<"Matricula", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Matricula findUnique
   */
  export type MatriculaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter, which Matricula to fetch.
     */
    where: MatriculaWhereUniqueInput
  }

  /**
   * Matricula findUniqueOrThrow
   */
  export type MatriculaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter, which Matricula to fetch.
     */
    where: MatriculaWhereUniqueInput
  }

  /**
   * Matricula findFirst
   */
  export type MatriculaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter, which Matricula to fetch.
     */
    where?: MatriculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matriculas to fetch.
     */
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matriculas.
     */
    cursor?: MatriculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matriculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matriculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matriculas.
     */
    distinct?: MatriculaScalarFieldEnum | MatriculaScalarFieldEnum[]
  }

  /**
   * Matricula findFirstOrThrow
   */
  export type MatriculaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter, which Matricula to fetch.
     */
    where?: MatriculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matriculas to fetch.
     */
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matriculas.
     */
    cursor?: MatriculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matriculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matriculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matriculas.
     */
    distinct?: MatriculaScalarFieldEnum | MatriculaScalarFieldEnum[]
  }

  /**
   * Matricula findMany
   */
  export type MatriculaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter, which Matriculas to fetch.
     */
    where?: MatriculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matriculas to fetch.
     */
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matriculas.
     */
    cursor?: MatriculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matriculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matriculas.
     */
    skip?: number
    distinct?: MatriculaScalarFieldEnum | MatriculaScalarFieldEnum[]
  }

  /**
   * Matricula create
   */
  export type MatriculaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * The data needed to create a Matricula.
     */
    data: XOR<MatriculaCreateInput, MatriculaUncheckedCreateInput>
  }

  /**
   * Matricula createMany
   */
  export type MatriculaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matriculas.
     */
    data: MatriculaCreateManyInput | MatriculaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Matricula update
   */
  export type MatriculaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * The data needed to update a Matricula.
     */
    data: XOR<MatriculaUpdateInput, MatriculaUncheckedUpdateInput>
    /**
     * Choose, which Matricula to update.
     */
    where: MatriculaWhereUniqueInput
  }

  /**
   * Matricula updateMany
   */
  export type MatriculaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matriculas.
     */
    data: XOR<MatriculaUpdateManyMutationInput, MatriculaUncheckedUpdateManyInput>
    /**
     * Filter which Matriculas to update
     */
    where?: MatriculaWhereInput
    /**
     * Limit how many Matriculas to update.
     */
    limit?: number
  }

  /**
   * Matricula upsert
   */
  export type MatriculaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * The filter to search for the Matricula to update in case it exists.
     */
    where: MatriculaWhereUniqueInput
    /**
     * In case the Matricula found by the `where` argument doesn't exist, create a new Matricula with this data.
     */
    create: XOR<MatriculaCreateInput, MatriculaUncheckedCreateInput>
    /**
     * In case the Matricula was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatriculaUpdateInput, MatriculaUncheckedUpdateInput>
  }

  /**
   * Matricula delete
   */
  export type MatriculaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter which Matricula to delete.
     */
    where: MatriculaWhereUniqueInput
  }

  /**
   * Matricula deleteMany
   */
  export type MatriculaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matriculas to delete
     */
    where?: MatriculaWhereInput
    /**
     * Limit how many Matriculas to delete.
     */
    limit?: number
  }

  /**
   * Matricula without action
   */
  export type MatriculaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EgressoScalarFieldEnum: {
    id: 'id',
    cpf: 'cpf',
    senha: 'senha',
    email: 'email',
    telefone: 'telefone',
    cidade: 'cidade',
    estado: 'estado',
    pais: 'pais',
    fotoPerfil: 'fotoPerfil',
    linkedin: 'linkedin',
    instagram: 'instagram',
    visivel: 'visivel'
  };

  export type EgressoScalarFieldEnum = (typeof EgressoScalarFieldEnum)[keyof typeof EgressoScalarFieldEnum]


  export const TrabalhoAtualScalarFieldEnum: {
    id: 'id',
    empresa: 'empresa',
    cidade: 'cidade',
    estado: 'estado',
    pais: 'pais',
    cargo: 'cargo',
    anoEntrada: 'anoEntrada',
    egressoId: 'egressoId'
  };

  export type TrabalhoAtualScalarFieldEnum = (typeof TrabalhoAtualScalarFieldEnum)[keyof typeof TrabalhoAtualScalarFieldEnum]


  export const InstituicaoScalarFieldEnum: {
    id: 'id',
    fotoPerfil: 'fotoPerfil',
    nomeCompleto: 'nomeCompleto',
    cnpj: 'cnpj',
    telefone: 'telefone',
    endereco: 'endereco',
    cep: 'cep',
    nomeRepresentante: 'nomeRepresentante',
    cpfRepresentante: 'cpfRepresentante',
    email: 'email',
    senha: 'senha'
  };

  export type InstituicaoScalarFieldEnum = (typeof InstituicaoScalarFieldEnum)[keyof typeof InstituicaoScalarFieldEnum]


  export const CursoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    createdAt: 'createdAt'
  };

  export type CursoScalarFieldEnum = (typeof CursoScalarFieldEnum)[keyof typeof CursoScalarFieldEnum]


  export const PessoaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cpf: 'cpf',
    email: 'email',
    createdAt: 'createdAt'
  };

  export type PessoaScalarFieldEnum = (typeof PessoaScalarFieldEnum)[keyof typeof PessoaScalarFieldEnum]


  export const MatriculaScalarFieldEnum: {
    id: 'id',
    cursoId: 'cursoId',
    pessoaId: 'pessoaId',
    anoSemestreEntrada: 'anoSemestreEntrada',
    anoSemestreSaida: 'anoSemestreSaida'
  };

  export type MatriculaScalarFieldEnum = (typeof MatriculaScalarFieldEnum)[keyof typeof MatriculaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const EgressoOrderByRelevanceFieldEnum: {
    cpf: 'cpf',
    senha: 'senha',
    email: 'email',
    telefone: 'telefone',
    cidade: 'cidade',
    estado: 'estado',
    pais: 'pais',
    fotoPerfil: 'fotoPerfil',
    linkedin: 'linkedin',
    instagram: 'instagram'
  };

  export type EgressoOrderByRelevanceFieldEnum = (typeof EgressoOrderByRelevanceFieldEnum)[keyof typeof EgressoOrderByRelevanceFieldEnum]


  export const TrabalhoAtualOrderByRelevanceFieldEnum: {
    empresa: 'empresa',
    cidade: 'cidade',
    estado: 'estado',
    pais: 'pais',
    cargo: 'cargo'
  };

  export type TrabalhoAtualOrderByRelevanceFieldEnum = (typeof TrabalhoAtualOrderByRelevanceFieldEnum)[keyof typeof TrabalhoAtualOrderByRelevanceFieldEnum]


  export const InstituicaoOrderByRelevanceFieldEnum: {
    fotoPerfil: 'fotoPerfil',
    nomeCompleto: 'nomeCompleto',
    cnpj: 'cnpj',
    telefone: 'telefone',
    endereco: 'endereco',
    cep: 'cep',
    nomeRepresentante: 'nomeRepresentante',
    cpfRepresentante: 'cpfRepresentante',
    email: 'email',
    senha: 'senha'
  };

  export type InstituicaoOrderByRelevanceFieldEnum = (typeof InstituicaoOrderByRelevanceFieldEnum)[keyof typeof InstituicaoOrderByRelevanceFieldEnum]


  export const CursoOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type CursoOrderByRelevanceFieldEnum = (typeof CursoOrderByRelevanceFieldEnum)[keyof typeof CursoOrderByRelevanceFieldEnum]


  export const PessoaOrderByRelevanceFieldEnum: {
    nome: 'nome',
    cpf: 'cpf',
    email: 'email'
  };

  export type PessoaOrderByRelevanceFieldEnum = (typeof PessoaOrderByRelevanceFieldEnum)[keyof typeof PessoaOrderByRelevanceFieldEnum]


  export const MatriculaOrderByRelevanceFieldEnum: {
    anoSemestreEntrada: 'anoSemestreEntrada',
    anoSemestreSaida: 'anoSemestreSaida'
  };

  export type MatriculaOrderByRelevanceFieldEnum = (typeof MatriculaOrderByRelevanceFieldEnum)[keyof typeof MatriculaOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type EgressoWhereInput = {
    AND?: EgressoWhereInput | EgressoWhereInput[]
    OR?: EgressoWhereInput[]
    NOT?: EgressoWhereInput | EgressoWhereInput[]
    id?: IntFilter<"Egresso"> | number
    cpf?: StringFilter<"Egresso"> | string
    senha?: StringFilter<"Egresso"> | string
    email?: StringFilter<"Egresso"> | string
    telefone?: StringFilter<"Egresso"> | string
    cidade?: StringFilter<"Egresso"> | string
    estado?: StringFilter<"Egresso"> | string
    pais?: StringFilter<"Egresso"> | string
    fotoPerfil?: StringNullableFilter<"Egresso"> | string | null
    linkedin?: StringNullableFilter<"Egresso"> | string | null
    instagram?: StringNullableFilter<"Egresso"> | string | null
    visivel?: BoolFilter<"Egresso"> | boolean
    trabalhoAtual?: XOR<TrabalhoAtualNullableScalarRelationFilter, TrabalhoAtualWhereInput> | null
  }

  export type EgressoOrderByWithRelationInput = {
    id?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    pais?: SortOrder
    fotoPerfil?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    visivel?: SortOrder
    trabalhoAtual?: TrabalhoAtualOrderByWithRelationInput
    _relevance?: EgressoOrderByRelevanceInput
  }

  export type EgressoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cpf?: string
    email?: string
    AND?: EgressoWhereInput | EgressoWhereInput[]
    OR?: EgressoWhereInput[]
    NOT?: EgressoWhereInput | EgressoWhereInput[]
    senha?: StringFilter<"Egresso"> | string
    telefone?: StringFilter<"Egresso"> | string
    cidade?: StringFilter<"Egresso"> | string
    estado?: StringFilter<"Egresso"> | string
    pais?: StringFilter<"Egresso"> | string
    fotoPerfil?: StringNullableFilter<"Egresso"> | string | null
    linkedin?: StringNullableFilter<"Egresso"> | string | null
    instagram?: StringNullableFilter<"Egresso"> | string | null
    visivel?: BoolFilter<"Egresso"> | boolean
    trabalhoAtual?: XOR<TrabalhoAtualNullableScalarRelationFilter, TrabalhoAtualWhereInput> | null
  }, "id" | "cpf" | "email">

  export type EgressoOrderByWithAggregationInput = {
    id?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    pais?: SortOrder
    fotoPerfil?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    visivel?: SortOrder
    _count?: EgressoCountOrderByAggregateInput
    _avg?: EgressoAvgOrderByAggregateInput
    _max?: EgressoMaxOrderByAggregateInput
    _min?: EgressoMinOrderByAggregateInput
    _sum?: EgressoSumOrderByAggregateInput
  }

  export type EgressoScalarWhereWithAggregatesInput = {
    AND?: EgressoScalarWhereWithAggregatesInput | EgressoScalarWhereWithAggregatesInput[]
    OR?: EgressoScalarWhereWithAggregatesInput[]
    NOT?: EgressoScalarWhereWithAggregatesInput | EgressoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Egresso"> | number
    cpf?: StringWithAggregatesFilter<"Egresso"> | string
    senha?: StringWithAggregatesFilter<"Egresso"> | string
    email?: StringWithAggregatesFilter<"Egresso"> | string
    telefone?: StringWithAggregatesFilter<"Egresso"> | string
    cidade?: StringWithAggregatesFilter<"Egresso"> | string
    estado?: StringWithAggregatesFilter<"Egresso"> | string
    pais?: StringWithAggregatesFilter<"Egresso"> | string
    fotoPerfil?: StringNullableWithAggregatesFilter<"Egresso"> | string | null
    linkedin?: StringNullableWithAggregatesFilter<"Egresso"> | string | null
    instagram?: StringNullableWithAggregatesFilter<"Egresso"> | string | null
    visivel?: BoolWithAggregatesFilter<"Egresso"> | boolean
  }

  export type TrabalhoAtualWhereInput = {
    AND?: TrabalhoAtualWhereInput | TrabalhoAtualWhereInput[]
    OR?: TrabalhoAtualWhereInput[]
    NOT?: TrabalhoAtualWhereInput | TrabalhoAtualWhereInput[]
    id?: IntFilter<"TrabalhoAtual"> | number
    empresa?: StringFilter<"TrabalhoAtual"> | string
    cidade?: StringFilter<"TrabalhoAtual"> | string
    estado?: StringFilter<"TrabalhoAtual"> | string
    pais?: StringFilter<"TrabalhoAtual"> | string
    cargo?: StringFilter<"TrabalhoAtual"> | string
    anoEntrada?: IntFilter<"TrabalhoAtual"> | number
    egressoId?: IntFilter<"TrabalhoAtual"> | number
    egresso?: XOR<EgressoScalarRelationFilter, EgressoWhereInput>
  }

  export type TrabalhoAtualOrderByWithRelationInput = {
    id?: SortOrder
    empresa?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    pais?: SortOrder
    cargo?: SortOrder
    anoEntrada?: SortOrder
    egressoId?: SortOrder
    egresso?: EgressoOrderByWithRelationInput
    _relevance?: TrabalhoAtualOrderByRelevanceInput
  }

  export type TrabalhoAtualWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    egressoId?: number
    AND?: TrabalhoAtualWhereInput | TrabalhoAtualWhereInput[]
    OR?: TrabalhoAtualWhereInput[]
    NOT?: TrabalhoAtualWhereInput | TrabalhoAtualWhereInput[]
    empresa?: StringFilter<"TrabalhoAtual"> | string
    cidade?: StringFilter<"TrabalhoAtual"> | string
    estado?: StringFilter<"TrabalhoAtual"> | string
    pais?: StringFilter<"TrabalhoAtual"> | string
    cargo?: StringFilter<"TrabalhoAtual"> | string
    anoEntrada?: IntFilter<"TrabalhoAtual"> | number
    egresso?: XOR<EgressoScalarRelationFilter, EgressoWhereInput>
  }, "id" | "egressoId">

  export type TrabalhoAtualOrderByWithAggregationInput = {
    id?: SortOrder
    empresa?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    pais?: SortOrder
    cargo?: SortOrder
    anoEntrada?: SortOrder
    egressoId?: SortOrder
    _count?: TrabalhoAtualCountOrderByAggregateInput
    _avg?: TrabalhoAtualAvgOrderByAggregateInput
    _max?: TrabalhoAtualMaxOrderByAggregateInput
    _min?: TrabalhoAtualMinOrderByAggregateInput
    _sum?: TrabalhoAtualSumOrderByAggregateInput
  }

  export type TrabalhoAtualScalarWhereWithAggregatesInput = {
    AND?: TrabalhoAtualScalarWhereWithAggregatesInput | TrabalhoAtualScalarWhereWithAggregatesInput[]
    OR?: TrabalhoAtualScalarWhereWithAggregatesInput[]
    NOT?: TrabalhoAtualScalarWhereWithAggregatesInput | TrabalhoAtualScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TrabalhoAtual"> | number
    empresa?: StringWithAggregatesFilter<"TrabalhoAtual"> | string
    cidade?: StringWithAggregatesFilter<"TrabalhoAtual"> | string
    estado?: StringWithAggregatesFilter<"TrabalhoAtual"> | string
    pais?: StringWithAggregatesFilter<"TrabalhoAtual"> | string
    cargo?: StringWithAggregatesFilter<"TrabalhoAtual"> | string
    anoEntrada?: IntWithAggregatesFilter<"TrabalhoAtual"> | number
    egressoId?: IntWithAggregatesFilter<"TrabalhoAtual"> | number
  }

  export type InstituicaoWhereInput = {
    AND?: InstituicaoWhereInput | InstituicaoWhereInput[]
    OR?: InstituicaoWhereInput[]
    NOT?: InstituicaoWhereInput | InstituicaoWhereInput[]
    id?: IntFilter<"Instituicao"> | number
    fotoPerfil?: StringNullableFilter<"Instituicao"> | string | null
    nomeCompleto?: StringFilter<"Instituicao"> | string
    cnpj?: StringFilter<"Instituicao"> | string
    telefone?: StringNullableFilter<"Instituicao"> | string | null
    endereco?: StringNullableFilter<"Instituicao"> | string | null
    cep?: StringNullableFilter<"Instituicao"> | string | null
    nomeRepresentante?: StringNullableFilter<"Instituicao"> | string | null
    cpfRepresentante?: StringNullableFilter<"Instituicao"> | string | null
    email?: StringFilter<"Instituicao"> | string
    senha?: StringFilter<"Instituicao"> | string
  }

  export type InstituicaoOrderByWithRelationInput = {
    id?: SortOrder
    fotoPerfil?: SortOrderInput | SortOrder
    nomeCompleto?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    nomeRepresentante?: SortOrderInput | SortOrder
    cpfRepresentante?: SortOrderInput | SortOrder
    email?: SortOrder
    senha?: SortOrder
    _relevance?: InstituicaoOrderByRelevanceInput
  }

  export type InstituicaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cnpj?: string
    email?: string
    AND?: InstituicaoWhereInput | InstituicaoWhereInput[]
    OR?: InstituicaoWhereInput[]
    NOT?: InstituicaoWhereInput | InstituicaoWhereInput[]
    fotoPerfil?: StringNullableFilter<"Instituicao"> | string | null
    nomeCompleto?: StringFilter<"Instituicao"> | string
    telefone?: StringNullableFilter<"Instituicao"> | string | null
    endereco?: StringNullableFilter<"Instituicao"> | string | null
    cep?: StringNullableFilter<"Instituicao"> | string | null
    nomeRepresentante?: StringNullableFilter<"Instituicao"> | string | null
    cpfRepresentante?: StringNullableFilter<"Instituicao"> | string | null
    senha?: StringFilter<"Instituicao"> | string
  }, "id" | "cnpj" | "email">

  export type InstituicaoOrderByWithAggregationInput = {
    id?: SortOrder
    fotoPerfil?: SortOrderInput | SortOrder
    nomeCompleto?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    nomeRepresentante?: SortOrderInput | SortOrder
    cpfRepresentante?: SortOrderInput | SortOrder
    email?: SortOrder
    senha?: SortOrder
    _count?: InstituicaoCountOrderByAggregateInput
    _avg?: InstituicaoAvgOrderByAggregateInput
    _max?: InstituicaoMaxOrderByAggregateInput
    _min?: InstituicaoMinOrderByAggregateInput
    _sum?: InstituicaoSumOrderByAggregateInput
  }

  export type InstituicaoScalarWhereWithAggregatesInput = {
    AND?: InstituicaoScalarWhereWithAggregatesInput | InstituicaoScalarWhereWithAggregatesInput[]
    OR?: InstituicaoScalarWhereWithAggregatesInput[]
    NOT?: InstituicaoScalarWhereWithAggregatesInput | InstituicaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Instituicao"> | number
    fotoPerfil?: StringNullableWithAggregatesFilter<"Instituicao"> | string | null
    nomeCompleto?: StringWithAggregatesFilter<"Instituicao"> | string
    cnpj?: StringWithAggregatesFilter<"Instituicao"> | string
    telefone?: StringNullableWithAggregatesFilter<"Instituicao"> | string | null
    endereco?: StringNullableWithAggregatesFilter<"Instituicao"> | string | null
    cep?: StringNullableWithAggregatesFilter<"Instituicao"> | string | null
    nomeRepresentante?: StringNullableWithAggregatesFilter<"Instituicao"> | string | null
    cpfRepresentante?: StringNullableWithAggregatesFilter<"Instituicao"> | string | null
    email?: StringWithAggregatesFilter<"Instituicao"> | string
    senha?: StringWithAggregatesFilter<"Instituicao"> | string
  }

  export type CursoWhereInput = {
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    id?: IntFilter<"Curso"> | number
    nome?: StringFilter<"Curso"> | string
    createdAt?: DateTimeFilter<"Curso"> | Date | string
    matriculas?: MatriculaListRelationFilter
  }

  export type CursoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    matriculas?: MatriculaOrderByRelationAggregateInput
    _relevance?: CursoOrderByRelevanceInput
  }

  export type CursoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    createdAt?: DateTimeFilter<"Curso"> | Date | string
    matriculas?: MatriculaListRelationFilter
  }, "id" | "nome">

  export type CursoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    _count?: CursoCountOrderByAggregateInput
    _avg?: CursoAvgOrderByAggregateInput
    _max?: CursoMaxOrderByAggregateInput
    _min?: CursoMinOrderByAggregateInput
    _sum?: CursoSumOrderByAggregateInput
  }

  export type CursoScalarWhereWithAggregatesInput = {
    AND?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    OR?: CursoScalarWhereWithAggregatesInput[]
    NOT?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Curso"> | number
    nome?: StringWithAggregatesFilter<"Curso"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Curso"> | Date | string
  }

  export type PessoaWhereInput = {
    AND?: PessoaWhereInput | PessoaWhereInput[]
    OR?: PessoaWhereInput[]
    NOT?: PessoaWhereInput | PessoaWhereInput[]
    id?: IntFilter<"Pessoa"> | number
    nome?: StringFilter<"Pessoa"> | string
    cpf?: StringFilter<"Pessoa"> | string
    email?: StringFilter<"Pessoa"> | string
    createdAt?: DateTimeFilter<"Pessoa"> | Date | string
    matriculas?: MatriculaListRelationFilter
  }

  export type PessoaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    matriculas?: MatriculaOrderByRelationAggregateInput
    _relevance?: PessoaOrderByRelevanceInput
  }

  export type PessoaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cpf?: string
    email?: string
    AND?: PessoaWhereInput | PessoaWhereInput[]
    OR?: PessoaWhereInput[]
    NOT?: PessoaWhereInput | PessoaWhereInput[]
    nome?: StringFilter<"Pessoa"> | string
    createdAt?: DateTimeFilter<"Pessoa"> | Date | string
    matriculas?: MatriculaListRelationFilter
  }, "id" | "cpf" | "email">

  export type PessoaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    _count?: PessoaCountOrderByAggregateInput
    _avg?: PessoaAvgOrderByAggregateInput
    _max?: PessoaMaxOrderByAggregateInput
    _min?: PessoaMinOrderByAggregateInput
    _sum?: PessoaSumOrderByAggregateInput
  }

  export type PessoaScalarWhereWithAggregatesInput = {
    AND?: PessoaScalarWhereWithAggregatesInput | PessoaScalarWhereWithAggregatesInput[]
    OR?: PessoaScalarWhereWithAggregatesInput[]
    NOT?: PessoaScalarWhereWithAggregatesInput | PessoaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pessoa"> | number
    nome?: StringWithAggregatesFilter<"Pessoa"> | string
    cpf?: StringWithAggregatesFilter<"Pessoa"> | string
    email?: StringWithAggregatesFilter<"Pessoa"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Pessoa"> | Date | string
  }

  export type MatriculaWhereInput = {
    AND?: MatriculaWhereInput | MatriculaWhereInput[]
    OR?: MatriculaWhereInput[]
    NOT?: MatriculaWhereInput | MatriculaWhereInput[]
    id?: IntFilter<"Matricula"> | number
    cursoId?: IntFilter<"Matricula"> | number
    pessoaId?: IntFilter<"Matricula"> | number
    anoSemestreEntrada?: StringFilter<"Matricula"> | string
    anoSemestreSaida?: StringNullableFilter<"Matricula"> | string | null
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    pessoa?: XOR<PessoaScalarRelationFilter, PessoaWhereInput>
  }

  export type MatriculaOrderByWithRelationInput = {
    id?: SortOrder
    cursoId?: SortOrder
    pessoaId?: SortOrder
    anoSemestreEntrada?: SortOrder
    anoSemestreSaida?: SortOrderInput | SortOrder
    curso?: CursoOrderByWithRelationInput
    pessoa?: PessoaOrderByWithRelationInput
    _relevance?: MatriculaOrderByRelevanceInput
  }

  export type MatriculaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cursoId_pessoaId?: MatriculaCursoIdPessoaIdCompoundUniqueInput
    AND?: MatriculaWhereInput | MatriculaWhereInput[]
    OR?: MatriculaWhereInput[]
    NOT?: MatriculaWhereInput | MatriculaWhereInput[]
    cursoId?: IntFilter<"Matricula"> | number
    pessoaId?: IntFilter<"Matricula"> | number
    anoSemestreEntrada?: StringFilter<"Matricula"> | string
    anoSemestreSaida?: StringNullableFilter<"Matricula"> | string | null
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    pessoa?: XOR<PessoaScalarRelationFilter, PessoaWhereInput>
  }, "id" | "cursoId_pessoaId">

  export type MatriculaOrderByWithAggregationInput = {
    id?: SortOrder
    cursoId?: SortOrder
    pessoaId?: SortOrder
    anoSemestreEntrada?: SortOrder
    anoSemestreSaida?: SortOrderInput | SortOrder
    _count?: MatriculaCountOrderByAggregateInput
    _avg?: MatriculaAvgOrderByAggregateInput
    _max?: MatriculaMaxOrderByAggregateInput
    _min?: MatriculaMinOrderByAggregateInput
    _sum?: MatriculaSumOrderByAggregateInput
  }

  export type MatriculaScalarWhereWithAggregatesInput = {
    AND?: MatriculaScalarWhereWithAggregatesInput | MatriculaScalarWhereWithAggregatesInput[]
    OR?: MatriculaScalarWhereWithAggregatesInput[]
    NOT?: MatriculaScalarWhereWithAggregatesInput | MatriculaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Matricula"> | number
    cursoId?: IntWithAggregatesFilter<"Matricula"> | number
    pessoaId?: IntWithAggregatesFilter<"Matricula"> | number
    anoSemestreEntrada?: StringWithAggregatesFilter<"Matricula"> | string
    anoSemestreSaida?: StringNullableWithAggregatesFilter<"Matricula"> | string | null
  }

  export type EgressoCreateInput = {
    cpf: string
    senha: string
    email: string
    telefone: string
    cidade: string
    estado: string
    pais: string
    fotoPerfil?: string | null
    linkedin?: string | null
    instagram?: string | null
    visivel?: boolean
    trabalhoAtual?: TrabalhoAtualCreateNestedOneWithoutEgressoInput
  }

  export type EgressoUncheckedCreateInput = {
    id?: number
    cpf: string
    senha: string
    email: string
    telefone: string
    cidade: string
    estado: string
    pais: string
    fotoPerfil?: string | null
    linkedin?: string | null
    instagram?: string | null
    visivel?: boolean
    trabalhoAtual?: TrabalhoAtualUncheckedCreateNestedOneWithoutEgressoInput
  }

  export type EgressoUpdateInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    fotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    visivel?: BoolFieldUpdateOperationsInput | boolean
    trabalhoAtual?: TrabalhoAtualUpdateOneWithoutEgressoNestedInput
  }

  export type EgressoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    fotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    visivel?: BoolFieldUpdateOperationsInput | boolean
    trabalhoAtual?: TrabalhoAtualUncheckedUpdateOneWithoutEgressoNestedInput
  }

  export type EgressoCreateManyInput = {
    id?: number
    cpf: string
    senha: string
    email: string
    telefone: string
    cidade: string
    estado: string
    pais: string
    fotoPerfil?: string | null
    linkedin?: string | null
    instagram?: string | null
    visivel?: boolean
  }

  export type EgressoUpdateManyMutationInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    fotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    visivel?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EgressoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    fotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    visivel?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrabalhoAtualCreateInput = {
    empresa: string
    cidade: string
    estado: string
    pais: string
    cargo: string
    anoEntrada: number
    egresso: EgressoCreateNestedOneWithoutTrabalhoAtualInput
  }

  export type TrabalhoAtualUncheckedCreateInput = {
    id?: number
    empresa: string
    cidade: string
    estado: string
    pais: string
    cargo: string
    anoEntrada: number
    egressoId: number
  }

  export type TrabalhoAtualUpdateInput = {
    empresa?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    anoEntrada?: IntFieldUpdateOperationsInput | number
    egresso?: EgressoUpdateOneRequiredWithoutTrabalhoAtualNestedInput
  }

  export type TrabalhoAtualUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    empresa?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    anoEntrada?: IntFieldUpdateOperationsInput | number
    egressoId?: IntFieldUpdateOperationsInput | number
  }

  export type TrabalhoAtualCreateManyInput = {
    id?: number
    empresa: string
    cidade: string
    estado: string
    pais: string
    cargo: string
    anoEntrada: number
    egressoId: number
  }

  export type TrabalhoAtualUpdateManyMutationInput = {
    empresa?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    anoEntrada?: IntFieldUpdateOperationsInput | number
  }

  export type TrabalhoAtualUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    empresa?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    anoEntrada?: IntFieldUpdateOperationsInput | number
    egressoId?: IntFieldUpdateOperationsInput | number
  }

  export type InstituicaoCreateInput = {
    fotoPerfil?: string | null
    nomeCompleto: string
    cnpj: string
    telefone?: string | null
    endereco?: string | null
    cep?: string | null
    nomeRepresentante?: string | null
    cpfRepresentante?: string | null
    email: string
    senha: string
  }

  export type InstituicaoUncheckedCreateInput = {
    id?: number
    fotoPerfil?: string | null
    nomeCompleto: string
    cnpj: string
    telefone?: string | null
    endereco?: string | null
    cep?: string | null
    nomeRepresentante?: string | null
    cpfRepresentante?: string | null
    email: string
    senha: string
  }

  export type InstituicaoUpdateInput = {
    fotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    nomeRepresentante?: NullableStringFieldUpdateOperationsInput | string | null
    cpfRepresentante?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type InstituicaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    nomeRepresentante?: NullableStringFieldUpdateOperationsInput | string | null
    cpfRepresentante?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type InstituicaoCreateManyInput = {
    id?: number
    fotoPerfil?: string | null
    nomeCompleto: string
    cnpj: string
    telefone?: string | null
    endereco?: string | null
    cep?: string | null
    nomeRepresentante?: string | null
    cpfRepresentante?: string | null
    email: string
    senha: string
  }

  export type InstituicaoUpdateManyMutationInput = {
    fotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    nomeRepresentante?: NullableStringFieldUpdateOperationsInput | string | null
    cpfRepresentante?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type InstituicaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    nomeRepresentante?: NullableStringFieldUpdateOperationsInput | string | null
    cpfRepresentante?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type CursoCreateInput = {
    nome: string
    createdAt?: Date | string
    matriculas?: MatriculaCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    matriculas?: MatriculaUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matriculas?: MatriculaUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matriculas?: MatriculaUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursoCreateManyInput = {
    id?: number
    nome: string
    createdAt?: Date | string
  }

  export type CursoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CursoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PessoaCreateInput = {
    nome: string
    cpf: string
    email: string
    createdAt?: Date | string
    matriculas?: MatriculaCreateNestedManyWithoutPessoaInput
  }

  export type PessoaUncheckedCreateInput = {
    id?: number
    nome: string
    cpf: string
    email: string
    createdAt?: Date | string
    matriculas?: MatriculaUncheckedCreateNestedManyWithoutPessoaInput
  }

  export type PessoaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matriculas?: MatriculaUpdateManyWithoutPessoaNestedInput
  }

  export type PessoaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matriculas?: MatriculaUncheckedUpdateManyWithoutPessoaNestedInput
  }

  export type PessoaCreateManyInput = {
    id?: number
    nome: string
    cpf: string
    email: string
    createdAt?: Date | string
  }

  export type PessoaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PessoaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatriculaCreateInput = {
    anoSemestreEntrada: string
    anoSemestreSaida?: string | null
    curso: CursoCreateNestedOneWithoutMatriculasInput
    pessoa: PessoaCreateNestedOneWithoutMatriculasInput
  }

  export type MatriculaUncheckedCreateInput = {
    id?: number
    cursoId: number
    pessoaId: number
    anoSemestreEntrada: string
    anoSemestreSaida?: string | null
  }

  export type MatriculaUpdateInput = {
    anoSemestreEntrada?: StringFieldUpdateOperationsInput | string
    anoSemestreSaida?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: CursoUpdateOneRequiredWithoutMatriculasNestedInput
    pessoa?: PessoaUpdateOneRequiredWithoutMatriculasNestedInput
  }

  export type MatriculaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    pessoaId?: IntFieldUpdateOperationsInput | number
    anoSemestreEntrada?: StringFieldUpdateOperationsInput | string
    anoSemestreSaida?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatriculaCreateManyInput = {
    id?: number
    cursoId: number
    pessoaId: number
    anoSemestreEntrada: string
    anoSemestreSaida?: string | null
  }

  export type MatriculaUpdateManyMutationInput = {
    anoSemestreEntrada?: StringFieldUpdateOperationsInput | string
    anoSemestreSaida?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatriculaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    pessoaId?: IntFieldUpdateOperationsInput | number
    anoSemestreEntrada?: StringFieldUpdateOperationsInput | string
    anoSemestreSaida?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TrabalhoAtualNullableScalarRelationFilter = {
    is?: TrabalhoAtualWhereInput | null
    isNot?: TrabalhoAtualWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EgressoOrderByRelevanceInput = {
    fields: EgressoOrderByRelevanceFieldEnum | EgressoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EgressoCountOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    pais?: SortOrder
    fotoPerfil?: SortOrder
    linkedin?: SortOrder
    instagram?: SortOrder
    visivel?: SortOrder
  }

  export type EgressoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EgressoMaxOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    pais?: SortOrder
    fotoPerfil?: SortOrder
    linkedin?: SortOrder
    instagram?: SortOrder
    visivel?: SortOrder
  }

  export type EgressoMinOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    pais?: SortOrder
    fotoPerfil?: SortOrder
    linkedin?: SortOrder
    instagram?: SortOrder
    visivel?: SortOrder
  }

  export type EgressoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EgressoScalarRelationFilter = {
    is?: EgressoWhereInput
    isNot?: EgressoWhereInput
  }

  export type TrabalhoAtualOrderByRelevanceInput = {
    fields: TrabalhoAtualOrderByRelevanceFieldEnum | TrabalhoAtualOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TrabalhoAtualCountOrderByAggregateInput = {
    id?: SortOrder
    empresa?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    pais?: SortOrder
    cargo?: SortOrder
    anoEntrada?: SortOrder
    egressoId?: SortOrder
  }

  export type TrabalhoAtualAvgOrderByAggregateInput = {
    id?: SortOrder
    anoEntrada?: SortOrder
    egressoId?: SortOrder
  }

  export type TrabalhoAtualMaxOrderByAggregateInput = {
    id?: SortOrder
    empresa?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    pais?: SortOrder
    cargo?: SortOrder
    anoEntrada?: SortOrder
    egressoId?: SortOrder
  }

  export type TrabalhoAtualMinOrderByAggregateInput = {
    id?: SortOrder
    empresa?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    pais?: SortOrder
    cargo?: SortOrder
    anoEntrada?: SortOrder
    egressoId?: SortOrder
  }

  export type TrabalhoAtualSumOrderByAggregateInput = {
    id?: SortOrder
    anoEntrada?: SortOrder
    egressoId?: SortOrder
  }

  export type InstituicaoOrderByRelevanceInput = {
    fields: InstituicaoOrderByRelevanceFieldEnum | InstituicaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InstituicaoCountOrderByAggregateInput = {
    id?: SortOrder
    fotoPerfil?: SortOrder
    nomeCompleto?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    cep?: SortOrder
    nomeRepresentante?: SortOrder
    cpfRepresentante?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type InstituicaoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InstituicaoMaxOrderByAggregateInput = {
    id?: SortOrder
    fotoPerfil?: SortOrder
    nomeCompleto?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    cep?: SortOrder
    nomeRepresentante?: SortOrder
    cpfRepresentante?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type InstituicaoMinOrderByAggregateInput = {
    id?: SortOrder
    fotoPerfil?: SortOrder
    nomeCompleto?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    cep?: SortOrder
    nomeRepresentante?: SortOrder
    cpfRepresentante?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type InstituicaoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MatriculaListRelationFilter = {
    every?: MatriculaWhereInput
    some?: MatriculaWhereInput
    none?: MatriculaWhereInput
  }

  export type MatriculaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CursoOrderByRelevanceInput = {
    fields: CursoOrderByRelevanceFieldEnum | CursoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CursoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
  }

  export type CursoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CursoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
  }

  export type CursoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
  }

  export type CursoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PessoaOrderByRelevanceInput = {
    fields: PessoaOrderByRelevanceFieldEnum | PessoaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PessoaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type PessoaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PessoaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type PessoaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type PessoaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CursoScalarRelationFilter = {
    is?: CursoWhereInput
    isNot?: CursoWhereInput
  }

  export type PessoaScalarRelationFilter = {
    is?: PessoaWhereInput
    isNot?: PessoaWhereInput
  }

  export type MatriculaOrderByRelevanceInput = {
    fields: MatriculaOrderByRelevanceFieldEnum | MatriculaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MatriculaCursoIdPessoaIdCompoundUniqueInput = {
    cursoId: number
    pessoaId: number
  }

  export type MatriculaCountOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    pessoaId?: SortOrder
    anoSemestreEntrada?: SortOrder
    anoSemestreSaida?: SortOrder
  }

  export type MatriculaAvgOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    pessoaId?: SortOrder
  }

  export type MatriculaMaxOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    pessoaId?: SortOrder
    anoSemestreEntrada?: SortOrder
    anoSemestreSaida?: SortOrder
  }

  export type MatriculaMinOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    pessoaId?: SortOrder
    anoSemestreEntrada?: SortOrder
    anoSemestreSaida?: SortOrder
  }

  export type MatriculaSumOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    pessoaId?: SortOrder
  }

  export type TrabalhoAtualCreateNestedOneWithoutEgressoInput = {
    create?: XOR<TrabalhoAtualCreateWithoutEgressoInput, TrabalhoAtualUncheckedCreateWithoutEgressoInput>
    connectOrCreate?: TrabalhoAtualCreateOrConnectWithoutEgressoInput
    connect?: TrabalhoAtualWhereUniqueInput
  }

  export type TrabalhoAtualUncheckedCreateNestedOneWithoutEgressoInput = {
    create?: XOR<TrabalhoAtualCreateWithoutEgressoInput, TrabalhoAtualUncheckedCreateWithoutEgressoInput>
    connectOrCreate?: TrabalhoAtualCreateOrConnectWithoutEgressoInput
    connect?: TrabalhoAtualWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TrabalhoAtualUpdateOneWithoutEgressoNestedInput = {
    create?: XOR<TrabalhoAtualCreateWithoutEgressoInput, TrabalhoAtualUncheckedCreateWithoutEgressoInput>
    connectOrCreate?: TrabalhoAtualCreateOrConnectWithoutEgressoInput
    upsert?: TrabalhoAtualUpsertWithoutEgressoInput
    disconnect?: TrabalhoAtualWhereInput | boolean
    delete?: TrabalhoAtualWhereInput | boolean
    connect?: TrabalhoAtualWhereUniqueInput
    update?: XOR<XOR<TrabalhoAtualUpdateToOneWithWhereWithoutEgressoInput, TrabalhoAtualUpdateWithoutEgressoInput>, TrabalhoAtualUncheckedUpdateWithoutEgressoInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TrabalhoAtualUncheckedUpdateOneWithoutEgressoNestedInput = {
    create?: XOR<TrabalhoAtualCreateWithoutEgressoInput, TrabalhoAtualUncheckedCreateWithoutEgressoInput>
    connectOrCreate?: TrabalhoAtualCreateOrConnectWithoutEgressoInput
    upsert?: TrabalhoAtualUpsertWithoutEgressoInput
    disconnect?: TrabalhoAtualWhereInput | boolean
    delete?: TrabalhoAtualWhereInput | boolean
    connect?: TrabalhoAtualWhereUniqueInput
    update?: XOR<XOR<TrabalhoAtualUpdateToOneWithWhereWithoutEgressoInput, TrabalhoAtualUpdateWithoutEgressoInput>, TrabalhoAtualUncheckedUpdateWithoutEgressoInput>
  }

  export type EgressoCreateNestedOneWithoutTrabalhoAtualInput = {
    create?: XOR<EgressoCreateWithoutTrabalhoAtualInput, EgressoUncheckedCreateWithoutTrabalhoAtualInput>
    connectOrCreate?: EgressoCreateOrConnectWithoutTrabalhoAtualInput
    connect?: EgressoWhereUniqueInput
  }

  export type EgressoUpdateOneRequiredWithoutTrabalhoAtualNestedInput = {
    create?: XOR<EgressoCreateWithoutTrabalhoAtualInput, EgressoUncheckedCreateWithoutTrabalhoAtualInput>
    connectOrCreate?: EgressoCreateOrConnectWithoutTrabalhoAtualInput
    upsert?: EgressoUpsertWithoutTrabalhoAtualInput
    connect?: EgressoWhereUniqueInput
    update?: XOR<XOR<EgressoUpdateToOneWithWhereWithoutTrabalhoAtualInput, EgressoUpdateWithoutTrabalhoAtualInput>, EgressoUncheckedUpdateWithoutTrabalhoAtualInput>
  }

  export type MatriculaCreateNestedManyWithoutCursoInput = {
    create?: XOR<MatriculaCreateWithoutCursoInput, MatriculaUncheckedCreateWithoutCursoInput> | MatriculaCreateWithoutCursoInput[] | MatriculaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutCursoInput | MatriculaCreateOrConnectWithoutCursoInput[]
    createMany?: MatriculaCreateManyCursoInputEnvelope
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
  }

  export type MatriculaUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<MatriculaCreateWithoutCursoInput, MatriculaUncheckedCreateWithoutCursoInput> | MatriculaCreateWithoutCursoInput[] | MatriculaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutCursoInput | MatriculaCreateOrConnectWithoutCursoInput[]
    createMany?: MatriculaCreateManyCursoInputEnvelope
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MatriculaUpdateManyWithoutCursoNestedInput = {
    create?: XOR<MatriculaCreateWithoutCursoInput, MatriculaUncheckedCreateWithoutCursoInput> | MatriculaCreateWithoutCursoInput[] | MatriculaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutCursoInput | MatriculaCreateOrConnectWithoutCursoInput[]
    upsert?: MatriculaUpsertWithWhereUniqueWithoutCursoInput | MatriculaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: MatriculaCreateManyCursoInputEnvelope
    set?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    disconnect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    delete?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    update?: MatriculaUpdateWithWhereUniqueWithoutCursoInput | MatriculaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: MatriculaUpdateManyWithWhereWithoutCursoInput | MatriculaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
  }

  export type MatriculaUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<MatriculaCreateWithoutCursoInput, MatriculaUncheckedCreateWithoutCursoInput> | MatriculaCreateWithoutCursoInput[] | MatriculaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutCursoInput | MatriculaCreateOrConnectWithoutCursoInput[]
    upsert?: MatriculaUpsertWithWhereUniqueWithoutCursoInput | MatriculaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: MatriculaCreateManyCursoInputEnvelope
    set?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    disconnect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    delete?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    update?: MatriculaUpdateWithWhereUniqueWithoutCursoInput | MatriculaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: MatriculaUpdateManyWithWhereWithoutCursoInput | MatriculaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
  }

  export type MatriculaCreateNestedManyWithoutPessoaInput = {
    create?: XOR<MatriculaCreateWithoutPessoaInput, MatriculaUncheckedCreateWithoutPessoaInput> | MatriculaCreateWithoutPessoaInput[] | MatriculaUncheckedCreateWithoutPessoaInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutPessoaInput | MatriculaCreateOrConnectWithoutPessoaInput[]
    createMany?: MatriculaCreateManyPessoaInputEnvelope
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
  }

  export type MatriculaUncheckedCreateNestedManyWithoutPessoaInput = {
    create?: XOR<MatriculaCreateWithoutPessoaInput, MatriculaUncheckedCreateWithoutPessoaInput> | MatriculaCreateWithoutPessoaInput[] | MatriculaUncheckedCreateWithoutPessoaInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutPessoaInput | MatriculaCreateOrConnectWithoutPessoaInput[]
    createMany?: MatriculaCreateManyPessoaInputEnvelope
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
  }

  export type MatriculaUpdateManyWithoutPessoaNestedInput = {
    create?: XOR<MatriculaCreateWithoutPessoaInput, MatriculaUncheckedCreateWithoutPessoaInput> | MatriculaCreateWithoutPessoaInput[] | MatriculaUncheckedCreateWithoutPessoaInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutPessoaInput | MatriculaCreateOrConnectWithoutPessoaInput[]
    upsert?: MatriculaUpsertWithWhereUniqueWithoutPessoaInput | MatriculaUpsertWithWhereUniqueWithoutPessoaInput[]
    createMany?: MatriculaCreateManyPessoaInputEnvelope
    set?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    disconnect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    delete?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    update?: MatriculaUpdateWithWhereUniqueWithoutPessoaInput | MatriculaUpdateWithWhereUniqueWithoutPessoaInput[]
    updateMany?: MatriculaUpdateManyWithWhereWithoutPessoaInput | MatriculaUpdateManyWithWhereWithoutPessoaInput[]
    deleteMany?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
  }

  export type MatriculaUncheckedUpdateManyWithoutPessoaNestedInput = {
    create?: XOR<MatriculaCreateWithoutPessoaInput, MatriculaUncheckedCreateWithoutPessoaInput> | MatriculaCreateWithoutPessoaInput[] | MatriculaUncheckedCreateWithoutPessoaInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutPessoaInput | MatriculaCreateOrConnectWithoutPessoaInput[]
    upsert?: MatriculaUpsertWithWhereUniqueWithoutPessoaInput | MatriculaUpsertWithWhereUniqueWithoutPessoaInput[]
    createMany?: MatriculaCreateManyPessoaInputEnvelope
    set?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    disconnect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    delete?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    update?: MatriculaUpdateWithWhereUniqueWithoutPessoaInput | MatriculaUpdateWithWhereUniqueWithoutPessoaInput[]
    updateMany?: MatriculaUpdateManyWithWhereWithoutPessoaInput | MatriculaUpdateManyWithWhereWithoutPessoaInput[]
    deleteMany?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
  }

  export type CursoCreateNestedOneWithoutMatriculasInput = {
    create?: XOR<CursoCreateWithoutMatriculasInput, CursoUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: CursoCreateOrConnectWithoutMatriculasInput
    connect?: CursoWhereUniqueInput
  }

  export type PessoaCreateNestedOneWithoutMatriculasInput = {
    create?: XOR<PessoaCreateWithoutMatriculasInput, PessoaUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: PessoaCreateOrConnectWithoutMatriculasInput
    connect?: PessoaWhereUniqueInput
  }

  export type CursoUpdateOneRequiredWithoutMatriculasNestedInput = {
    create?: XOR<CursoCreateWithoutMatriculasInput, CursoUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: CursoCreateOrConnectWithoutMatriculasInput
    upsert?: CursoUpsertWithoutMatriculasInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutMatriculasInput, CursoUpdateWithoutMatriculasInput>, CursoUncheckedUpdateWithoutMatriculasInput>
  }

  export type PessoaUpdateOneRequiredWithoutMatriculasNestedInput = {
    create?: XOR<PessoaCreateWithoutMatriculasInput, PessoaUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: PessoaCreateOrConnectWithoutMatriculasInput
    upsert?: PessoaUpsertWithoutMatriculasInput
    connect?: PessoaWhereUniqueInput
    update?: XOR<XOR<PessoaUpdateToOneWithWhereWithoutMatriculasInput, PessoaUpdateWithoutMatriculasInput>, PessoaUncheckedUpdateWithoutMatriculasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TrabalhoAtualCreateWithoutEgressoInput = {
    empresa: string
    cidade: string
    estado: string
    pais: string
    cargo: string
    anoEntrada: number
  }

  export type TrabalhoAtualUncheckedCreateWithoutEgressoInput = {
    id?: number
    empresa: string
    cidade: string
    estado: string
    pais: string
    cargo: string
    anoEntrada: number
  }

  export type TrabalhoAtualCreateOrConnectWithoutEgressoInput = {
    where: TrabalhoAtualWhereUniqueInput
    create: XOR<TrabalhoAtualCreateWithoutEgressoInput, TrabalhoAtualUncheckedCreateWithoutEgressoInput>
  }

  export type TrabalhoAtualUpsertWithoutEgressoInput = {
    update: XOR<TrabalhoAtualUpdateWithoutEgressoInput, TrabalhoAtualUncheckedUpdateWithoutEgressoInput>
    create: XOR<TrabalhoAtualCreateWithoutEgressoInput, TrabalhoAtualUncheckedCreateWithoutEgressoInput>
    where?: TrabalhoAtualWhereInput
  }

  export type TrabalhoAtualUpdateToOneWithWhereWithoutEgressoInput = {
    where?: TrabalhoAtualWhereInput
    data: XOR<TrabalhoAtualUpdateWithoutEgressoInput, TrabalhoAtualUncheckedUpdateWithoutEgressoInput>
  }

  export type TrabalhoAtualUpdateWithoutEgressoInput = {
    empresa?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    anoEntrada?: IntFieldUpdateOperationsInput | number
  }

  export type TrabalhoAtualUncheckedUpdateWithoutEgressoInput = {
    id?: IntFieldUpdateOperationsInput | number
    empresa?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    anoEntrada?: IntFieldUpdateOperationsInput | number
  }

  export type EgressoCreateWithoutTrabalhoAtualInput = {
    cpf: string
    senha: string
    email: string
    telefone: string
    cidade: string
    estado: string
    pais: string
    fotoPerfil?: string | null
    linkedin?: string | null
    instagram?: string | null
    visivel?: boolean
  }

  export type EgressoUncheckedCreateWithoutTrabalhoAtualInput = {
    id?: number
    cpf: string
    senha: string
    email: string
    telefone: string
    cidade: string
    estado: string
    pais: string
    fotoPerfil?: string | null
    linkedin?: string | null
    instagram?: string | null
    visivel?: boolean
  }

  export type EgressoCreateOrConnectWithoutTrabalhoAtualInput = {
    where: EgressoWhereUniqueInput
    create: XOR<EgressoCreateWithoutTrabalhoAtualInput, EgressoUncheckedCreateWithoutTrabalhoAtualInput>
  }

  export type EgressoUpsertWithoutTrabalhoAtualInput = {
    update: XOR<EgressoUpdateWithoutTrabalhoAtualInput, EgressoUncheckedUpdateWithoutTrabalhoAtualInput>
    create: XOR<EgressoCreateWithoutTrabalhoAtualInput, EgressoUncheckedCreateWithoutTrabalhoAtualInput>
    where?: EgressoWhereInput
  }

  export type EgressoUpdateToOneWithWhereWithoutTrabalhoAtualInput = {
    where?: EgressoWhereInput
    data: XOR<EgressoUpdateWithoutTrabalhoAtualInput, EgressoUncheckedUpdateWithoutTrabalhoAtualInput>
  }

  export type EgressoUpdateWithoutTrabalhoAtualInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    fotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    visivel?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EgressoUncheckedUpdateWithoutTrabalhoAtualInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    fotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    visivel?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MatriculaCreateWithoutCursoInput = {
    anoSemestreEntrada: string
    anoSemestreSaida?: string | null
    pessoa: PessoaCreateNestedOneWithoutMatriculasInput
  }

  export type MatriculaUncheckedCreateWithoutCursoInput = {
    id?: number
    pessoaId: number
    anoSemestreEntrada: string
    anoSemestreSaida?: string | null
  }

  export type MatriculaCreateOrConnectWithoutCursoInput = {
    where: MatriculaWhereUniqueInput
    create: XOR<MatriculaCreateWithoutCursoInput, MatriculaUncheckedCreateWithoutCursoInput>
  }

  export type MatriculaCreateManyCursoInputEnvelope = {
    data: MatriculaCreateManyCursoInput | MatriculaCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type MatriculaUpsertWithWhereUniqueWithoutCursoInput = {
    where: MatriculaWhereUniqueInput
    update: XOR<MatriculaUpdateWithoutCursoInput, MatriculaUncheckedUpdateWithoutCursoInput>
    create: XOR<MatriculaCreateWithoutCursoInput, MatriculaUncheckedCreateWithoutCursoInput>
  }

  export type MatriculaUpdateWithWhereUniqueWithoutCursoInput = {
    where: MatriculaWhereUniqueInput
    data: XOR<MatriculaUpdateWithoutCursoInput, MatriculaUncheckedUpdateWithoutCursoInput>
  }

  export type MatriculaUpdateManyWithWhereWithoutCursoInput = {
    where: MatriculaScalarWhereInput
    data: XOR<MatriculaUpdateManyMutationInput, MatriculaUncheckedUpdateManyWithoutCursoInput>
  }

  export type MatriculaScalarWhereInput = {
    AND?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
    OR?: MatriculaScalarWhereInput[]
    NOT?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
    id?: IntFilter<"Matricula"> | number
    cursoId?: IntFilter<"Matricula"> | number
    pessoaId?: IntFilter<"Matricula"> | number
    anoSemestreEntrada?: StringFilter<"Matricula"> | string
    anoSemestreSaida?: StringNullableFilter<"Matricula"> | string | null
  }

  export type MatriculaCreateWithoutPessoaInput = {
    anoSemestreEntrada: string
    anoSemestreSaida?: string | null
    curso: CursoCreateNestedOneWithoutMatriculasInput
  }

  export type MatriculaUncheckedCreateWithoutPessoaInput = {
    id?: number
    cursoId: number
    anoSemestreEntrada: string
    anoSemestreSaida?: string | null
  }

  export type MatriculaCreateOrConnectWithoutPessoaInput = {
    where: MatriculaWhereUniqueInput
    create: XOR<MatriculaCreateWithoutPessoaInput, MatriculaUncheckedCreateWithoutPessoaInput>
  }

  export type MatriculaCreateManyPessoaInputEnvelope = {
    data: MatriculaCreateManyPessoaInput | MatriculaCreateManyPessoaInput[]
    skipDuplicates?: boolean
  }

  export type MatriculaUpsertWithWhereUniqueWithoutPessoaInput = {
    where: MatriculaWhereUniqueInput
    update: XOR<MatriculaUpdateWithoutPessoaInput, MatriculaUncheckedUpdateWithoutPessoaInput>
    create: XOR<MatriculaCreateWithoutPessoaInput, MatriculaUncheckedCreateWithoutPessoaInput>
  }

  export type MatriculaUpdateWithWhereUniqueWithoutPessoaInput = {
    where: MatriculaWhereUniqueInput
    data: XOR<MatriculaUpdateWithoutPessoaInput, MatriculaUncheckedUpdateWithoutPessoaInput>
  }

  export type MatriculaUpdateManyWithWhereWithoutPessoaInput = {
    where: MatriculaScalarWhereInput
    data: XOR<MatriculaUpdateManyMutationInput, MatriculaUncheckedUpdateManyWithoutPessoaInput>
  }

  export type CursoCreateWithoutMatriculasInput = {
    nome: string
    createdAt?: Date | string
  }

  export type CursoUncheckedCreateWithoutMatriculasInput = {
    id?: number
    nome: string
    createdAt?: Date | string
  }

  export type CursoCreateOrConnectWithoutMatriculasInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutMatriculasInput, CursoUncheckedCreateWithoutMatriculasInput>
  }

  export type PessoaCreateWithoutMatriculasInput = {
    nome: string
    cpf: string
    email: string
    createdAt?: Date | string
  }

  export type PessoaUncheckedCreateWithoutMatriculasInput = {
    id?: number
    nome: string
    cpf: string
    email: string
    createdAt?: Date | string
  }

  export type PessoaCreateOrConnectWithoutMatriculasInput = {
    where: PessoaWhereUniqueInput
    create: XOR<PessoaCreateWithoutMatriculasInput, PessoaUncheckedCreateWithoutMatriculasInput>
  }

  export type CursoUpsertWithoutMatriculasInput = {
    update: XOR<CursoUpdateWithoutMatriculasInput, CursoUncheckedUpdateWithoutMatriculasInput>
    create: XOR<CursoCreateWithoutMatriculasInput, CursoUncheckedCreateWithoutMatriculasInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutMatriculasInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutMatriculasInput, CursoUncheckedUpdateWithoutMatriculasInput>
  }

  export type CursoUpdateWithoutMatriculasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CursoUncheckedUpdateWithoutMatriculasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PessoaUpsertWithoutMatriculasInput = {
    update: XOR<PessoaUpdateWithoutMatriculasInput, PessoaUncheckedUpdateWithoutMatriculasInput>
    create: XOR<PessoaCreateWithoutMatriculasInput, PessoaUncheckedCreateWithoutMatriculasInput>
    where?: PessoaWhereInput
  }

  export type PessoaUpdateToOneWithWhereWithoutMatriculasInput = {
    where?: PessoaWhereInput
    data: XOR<PessoaUpdateWithoutMatriculasInput, PessoaUncheckedUpdateWithoutMatriculasInput>
  }

  export type PessoaUpdateWithoutMatriculasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PessoaUncheckedUpdateWithoutMatriculasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatriculaCreateManyCursoInput = {
    id?: number
    pessoaId: number
    anoSemestreEntrada: string
    anoSemestreSaida?: string | null
  }

  export type MatriculaUpdateWithoutCursoInput = {
    anoSemestreEntrada?: StringFieldUpdateOperationsInput | string
    anoSemestreSaida?: NullableStringFieldUpdateOperationsInput | string | null
    pessoa?: PessoaUpdateOneRequiredWithoutMatriculasNestedInput
  }

  export type MatriculaUncheckedUpdateWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    pessoaId?: IntFieldUpdateOperationsInput | number
    anoSemestreEntrada?: StringFieldUpdateOperationsInput | string
    anoSemestreSaida?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatriculaUncheckedUpdateManyWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    pessoaId?: IntFieldUpdateOperationsInput | number
    anoSemestreEntrada?: StringFieldUpdateOperationsInput | string
    anoSemestreSaida?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatriculaCreateManyPessoaInput = {
    id?: number
    cursoId: number
    anoSemestreEntrada: string
    anoSemestreSaida?: string | null
  }

  export type MatriculaUpdateWithoutPessoaInput = {
    anoSemestreEntrada?: StringFieldUpdateOperationsInput | string
    anoSemestreSaida?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: CursoUpdateOneRequiredWithoutMatriculasNestedInput
  }

  export type MatriculaUncheckedUpdateWithoutPessoaInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    anoSemestreEntrada?: StringFieldUpdateOperationsInput | string
    anoSemestreSaida?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatriculaUncheckedUpdateManyWithoutPessoaInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    anoSemestreEntrada?: StringFieldUpdateOperationsInput | string
    anoSemestreSaida?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}