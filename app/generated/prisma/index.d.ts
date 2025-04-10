
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
    TrabalhoAtual: 'TrabalhoAtual'
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
      modelProps: "egresso" | "trabalhoAtual"
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
    github: string | null
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
    github: string | null
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
    github: number
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
    github?: true
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
    github?: true
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
    github?: true
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
    github: string | null
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
    github?: boolean
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
    github?: boolean
    visivel?: boolean
  }

  export type EgressoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cpf" | "senha" | "email" | "telefone" | "cidade" | "estado" | "pais" | "fotoPerfil" | "linkedin" | "instagram" | "github" | "visivel", ExtArgs["result"]["egresso"]>
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
      github: string | null
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
    readonly github: FieldRef<"Egresso", 'String'>
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
    github: 'github',
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
    instagram: 'instagram',
    github: 'github'
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
    github?: StringNullableFilter<"Egresso"> | string | null
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
    github?: SortOrderInput | SortOrder
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
    github?: StringNullableFilter<"Egresso"> | string | null
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
    github?: SortOrderInput | SortOrder
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
    github?: StringNullableWithAggregatesFilter<"Egresso"> | string | null
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
    github?: string | null
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
    github?: string | null
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
    github?: NullableStringFieldUpdateOperationsInput | string | null
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
    github?: NullableStringFieldUpdateOperationsInput | string | null
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
    github?: string | null
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
    github?: NullableStringFieldUpdateOperationsInput | string | null
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
    github?: NullableStringFieldUpdateOperationsInput | string | null
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
    github?: SortOrder
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
    github?: SortOrder
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
    github?: SortOrder
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
    github?: string | null
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
    github?: string | null
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
    github?: NullableStringFieldUpdateOperationsInput | string | null
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
    github?: NullableStringFieldUpdateOperationsInput | string | null
    visivel?: BoolFieldUpdateOperationsInput | boolean
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