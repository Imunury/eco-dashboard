
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
 * Model ecobot_status
 * 
 */
export type ecobot_status = $Result.DefaultSelection<Prisma.$ecobot_statusPayload>
/**
 * Model ecobot_status_temp
 * This table has subclasses and requires additional setup for migrations. Visit https://pris.ly/d/table-inheritance for more info.
 */
export type ecobot_status_temp = $Result.DefaultSelection<Prisma.$ecobot_status_tempPayload>
/**
 * Model ecobot_ts_info
 * 
 */
export type ecobot_ts_info = $Result.DefaultSelection<Prisma.$ecobot_ts_infoPayload>
/**
 * Model ecobot_ts_info_temp
 * This table has subclasses and requires additional setup for migrations. Visit https://pris.ly/d/table-inheritance for more info.
 */
export type ecobot_ts_info_temp = $Result.DefaultSelection<Prisma.$ecobot_ts_info_tempPayload>
/**
 * Model water_quality
 * 
 */
export type water_quality = $Result.DefaultSelection<Prisma.$water_qualityPayload>
/**
 * Model water_quality_temp
 * This table has subclasses and requires additional setup for migrations. Visit https://pris.ly/d/table-inheritance for more info.
 */
export type water_quality_temp = $Result.DefaultSelection<Prisma.$water_quality_tempPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Ecobot_statuses
 * const ecobot_statuses = await prisma.ecobot_status.findMany()
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
   * // Fetch zero or more Ecobot_statuses
   * const ecobot_statuses = await prisma.ecobot_status.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.ecobot_status`: Exposes CRUD operations for the **ecobot_status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ecobot_statuses
    * const ecobot_statuses = await prisma.ecobot_status.findMany()
    * ```
    */
  get ecobot_status(): Prisma.ecobot_statusDelegate<ExtArgs>;

  /**
   * `prisma.ecobot_status_temp`: Exposes CRUD operations for the **ecobot_status_temp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ecobot_status_temps
    * const ecobot_status_temps = await prisma.ecobot_status_temp.findMany()
    * ```
    */
  get ecobot_status_temp(): Prisma.ecobot_status_tempDelegate<ExtArgs>;

  /**
   * `prisma.ecobot_ts_info`: Exposes CRUD operations for the **ecobot_ts_info** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ecobot_ts_infos
    * const ecobot_ts_infos = await prisma.ecobot_ts_info.findMany()
    * ```
    */
  get ecobot_ts_info(): Prisma.ecobot_ts_infoDelegate<ExtArgs>;

  /**
   * `prisma.ecobot_ts_info_temp`: Exposes CRUD operations for the **ecobot_ts_info_temp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ecobot_ts_info_temps
    * const ecobot_ts_info_temps = await prisma.ecobot_ts_info_temp.findMany()
    * ```
    */
  get ecobot_ts_info_temp(): Prisma.ecobot_ts_info_tempDelegate<ExtArgs>;

  /**
   * `prisma.water_quality`: Exposes CRUD operations for the **water_quality** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Water_qualities
    * const water_qualities = await prisma.water_quality.findMany()
    * ```
    */
  get water_quality(): Prisma.water_qualityDelegate<ExtArgs>;

  /**
   * `prisma.water_quality_temp`: Exposes CRUD operations for the **water_quality_temp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Water_quality_temps
    * const water_quality_temps = await prisma.water_quality_temp.findMany()
    * ```
    */
  get water_quality_temp(): Prisma.water_quality_tempDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.17.0
   * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    ecobot_status: 'ecobot_status',
    ecobot_status_temp: 'ecobot_status_temp',
    ecobot_ts_info: 'ecobot_ts_info',
    ecobot_ts_info_temp: 'ecobot_ts_info_temp',
    water_quality: 'water_quality',
    water_quality_temp: 'water_quality_temp'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "ecobot_status" | "ecobot_status_temp" | "ecobot_ts_info" | "ecobot_ts_info_temp" | "water_quality" | "water_quality_temp"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ecobot_status: {
        payload: Prisma.$ecobot_statusPayload<ExtArgs>
        fields: Prisma.ecobot_statusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ecobot_statusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_statusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ecobot_statusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_statusPayload>
          }
          findFirst: {
            args: Prisma.ecobot_statusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_statusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ecobot_statusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_statusPayload>
          }
          findMany: {
            args: Prisma.ecobot_statusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_statusPayload>[]
          }
          create: {
            args: Prisma.ecobot_statusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_statusPayload>
          }
          createMany: {
            args: Prisma.ecobot_statusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ecobot_statusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_statusPayload>[]
          }
          delete: {
            args: Prisma.ecobot_statusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_statusPayload>
          }
          update: {
            args: Prisma.ecobot_statusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_statusPayload>
          }
          deleteMany: {
            args: Prisma.ecobot_statusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ecobot_statusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ecobot_statusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_statusPayload>
          }
          aggregate: {
            args: Prisma.Ecobot_statusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEcobot_status>
          }
          groupBy: {
            args: Prisma.ecobot_statusGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ecobot_statusGroupByOutputType>[]
          }
          count: {
            args: Prisma.ecobot_statusCountArgs<ExtArgs>
            result: $Utils.Optional<Ecobot_statusCountAggregateOutputType> | number
          }
        }
      }
      ecobot_status_temp: {
        payload: Prisma.$ecobot_status_tempPayload<ExtArgs>
        fields: Prisma.ecobot_status_tempFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ecobot_status_tempFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_status_tempPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ecobot_status_tempFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_status_tempPayload>
          }
          findFirst: {
            args: Prisma.ecobot_status_tempFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_status_tempPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ecobot_status_tempFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_status_tempPayload>
          }
          findMany: {
            args: Prisma.ecobot_status_tempFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_status_tempPayload>[]
          }
          create: {
            args: Prisma.ecobot_status_tempCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_status_tempPayload>
          }
          createMany: {
            args: Prisma.ecobot_status_tempCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ecobot_status_tempCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_status_tempPayload>[]
          }
          delete: {
            args: Prisma.ecobot_status_tempDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_status_tempPayload>
          }
          update: {
            args: Prisma.ecobot_status_tempUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_status_tempPayload>
          }
          deleteMany: {
            args: Prisma.ecobot_status_tempDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ecobot_status_tempUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ecobot_status_tempUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_status_tempPayload>
          }
          aggregate: {
            args: Prisma.Ecobot_status_tempAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEcobot_status_temp>
          }
          groupBy: {
            args: Prisma.ecobot_status_tempGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ecobot_status_tempGroupByOutputType>[]
          }
          count: {
            args: Prisma.ecobot_status_tempCountArgs<ExtArgs>
            result: $Utils.Optional<Ecobot_status_tempCountAggregateOutputType> | number
          }
        }
      }
      ecobot_ts_info: {
        payload: Prisma.$ecobot_ts_infoPayload<ExtArgs>
        fields: Prisma.ecobot_ts_infoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ecobot_ts_infoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_ts_infoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ecobot_ts_infoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_ts_infoPayload>
          }
          findFirst: {
            args: Prisma.ecobot_ts_infoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_ts_infoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ecobot_ts_infoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_ts_infoPayload>
          }
          findMany: {
            args: Prisma.ecobot_ts_infoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_ts_infoPayload>[]
          }
          create: {
            args: Prisma.ecobot_ts_infoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_ts_infoPayload>
          }
          createMany: {
            args: Prisma.ecobot_ts_infoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ecobot_ts_infoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_ts_infoPayload>[]
          }
          delete: {
            args: Prisma.ecobot_ts_infoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_ts_infoPayload>
          }
          update: {
            args: Prisma.ecobot_ts_infoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_ts_infoPayload>
          }
          deleteMany: {
            args: Prisma.ecobot_ts_infoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ecobot_ts_infoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ecobot_ts_infoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_ts_infoPayload>
          }
          aggregate: {
            args: Prisma.Ecobot_ts_infoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEcobot_ts_info>
          }
          groupBy: {
            args: Prisma.ecobot_ts_infoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ecobot_ts_infoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ecobot_ts_infoCountArgs<ExtArgs>
            result: $Utils.Optional<Ecobot_ts_infoCountAggregateOutputType> | number
          }
        }
      }
      ecobot_ts_info_temp: {
        payload: Prisma.$ecobot_ts_info_tempPayload<ExtArgs>
        fields: Prisma.ecobot_ts_info_tempFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ecobot_ts_info_tempFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_ts_info_tempPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ecobot_ts_info_tempFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_ts_info_tempPayload>
          }
          findFirst: {
            args: Prisma.ecobot_ts_info_tempFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_ts_info_tempPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ecobot_ts_info_tempFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_ts_info_tempPayload>
          }
          findMany: {
            args: Prisma.ecobot_ts_info_tempFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_ts_info_tempPayload>[]
          }
          create: {
            args: Prisma.ecobot_ts_info_tempCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_ts_info_tempPayload>
          }
          createMany: {
            args: Prisma.ecobot_ts_info_tempCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ecobot_ts_info_tempCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_ts_info_tempPayload>[]
          }
          delete: {
            args: Prisma.ecobot_ts_info_tempDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_ts_info_tempPayload>
          }
          update: {
            args: Prisma.ecobot_ts_info_tempUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_ts_info_tempPayload>
          }
          deleteMany: {
            args: Prisma.ecobot_ts_info_tempDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ecobot_ts_info_tempUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ecobot_ts_info_tempUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ecobot_ts_info_tempPayload>
          }
          aggregate: {
            args: Prisma.Ecobot_ts_info_tempAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEcobot_ts_info_temp>
          }
          groupBy: {
            args: Prisma.ecobot_ts_info_tempGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ecobot_ts_info_tempGroupByOutputType>[]
          }
          count: {
            args: Prisma.ecobot_ts_info_tempCountArgs<ExtArgs>
            result: $Utils.Optional<Ecobot_ts_info_tempCountAggregateOutputType> | number
          }
        }
      }
      water_quality: {
        payload: Prisma.$water_qualityPayload<ExtArgs>
        fields: Prisma.water_qualityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.water_qualityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_qualityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.water_qualityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_qualityPayload>
          }
          findFirst: {
            args: Prisma.water_qualityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_qualityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.water_qualityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_qualityPayload>
          }
          findMany: {
            args: Prisma.water_qualityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_qualityPayload>[]
          }
          create: {
            args: Prisma.water_qualityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_qualityPayload>
          }
          createMany: {
            args: Prisma.water_qualityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.water_qualityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_qualityPayload>[]
          }
          delete: {
            args: Prisma.water_qualityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_qualityPayload>
          }
          update: {
            args: Prisma.water_qualityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_qualityPayload>
          }
          deleteMany: {
            args: Prisma.water_qualityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.water_qualityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.water_qualityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_qualityPayload>
          }
          aggregate: {
            args: Prisma.Water_qualityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWater_quality>
          }
          groupBy: {
            args: Prisma.water_qualityGroupByArgs<ExtArgs>
            result: $Utils.Optional<Water_qualityGroupByOutputType>[]
          }
          count: {
            args: Prisma.water_qualityCountArgs<ExtArgs>
            result: $Utils.Optional<Water_qualityCountAggregateOutputType> | number
          }
        }
      }
      water_quality_temp: {
        payload: Prisma.$water_quality_tempPayload<ExtArgs>
        fields: Prisma.water_quality_tempFieldRefs
        operations: {
          findUnique: {
            args: Prisma.water_quality_tempFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_quality_tempPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.water_quality_tempFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_quality_tempPayload>
          }
          findFirst: {
            args: Prisma.water_quality_tempFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_quality_tempPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.water_quality_tempFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_quality_tempPayload>
          }
          findMany: {
            args: Prisma.water_quality_tempFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_quality_tempPayload>[]
          }
          create: {
            args: Prisma.water_quality_tempCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_quality_tempPayload>
          }
          createMany: {
            args: Prisma.water_quality_tempCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.water_quality_tempCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_quality_tempPayload>[]
          }
          delete: {
            args: Prisma.water_quality_tempDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_quality_tempPayload>
          }
          update: {
            args: Prisma.water_quality_tempUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_quality_tempPayload>
          }
          deleteMany: {
            args: Prisma.water_quality_tempDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.water_quality_tempUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.water_quality_tempUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_quality_tempPayload>
          }
          aggregate: {
            args: Prisma.Water_quality_tempAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWater_quality_temp>
          }
          groupBy: {
            args: Prisma.water_quality_tempGroupByArgs<ExtArgs>
            result: $Utils.Optional<Water_quality_tempGroupByOutputType>[]
          }
          count: {
            args: Prisma.water_quality_tempCountArgs<ExtArgs>
            result: $Utils.Optional<Water_quality_tempCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
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
   * Model ecobot_status
   */

  export type AggregateEcobot_status = {
    _count: Ecobot_statusCountAggregateOutputType | null
    _avg: Ecobot_statusAvgAggregateOutputType | null
    _sum: Ecobot_statusSumAggregateOutputType | null
    _min: Ecobot_statusMinAggregateOutputType | null
    _max: Ecobot_statusMaxAggregateOutputType | null
  }

  export type Ecobot_statusAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    depth_data: number | null
    velocity: number | null
    current_state: number | null
    plc_status: number | null
    pump_values: number | null
    ctr_pv_v: number | null
    ctr_pv_c: number | null
    ctr_bat_temp: number | null
    ctr_device_temp: number | null
    ctr_bat_soc: number | null
    ctr_bat_max_v_today: number | null
    ctr_bat_min_v_today: number | null
    ctr_gen_energy_today: number | null
    ctr_gen_energy_month: number | null
    ctr_gen_energy_year: number | null
    ctr_gen_energy_total: number | null
    ctr_bat_v: number | null
    ctr_bat_c: number | null
    ctr_device_status: number | null
    ctr_bat_status: number | null
    ctr_bat_temp_status: number | null
    ctr_solar_status: number | null
    ctr_charging_status: number | null
  }

  export type Ecobot_statusSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    depth_data: number | null
    velocity: number | null
    current_state: number | null
    plc_status: number | null
    pump_values: number[]
    ctr_pv_v: number | null
    ctr_pv_c: number | null
    ctr_bat_temp: number | null
    ctr_device_temp: number | null
    ctr_bat_soc: number | null
    ctr_bat_max_v_today: number | null
    ctr_bat_min_v_today: number | null
    ctr_gen_energy_today: number | null
    ctr_gen_energy_month: number | null
    ctr_gen_energy_year: number | null
    ctr_gen_energy_total: number | null
    ctr_bat_v: number | null
    ctr_bat_c: number | null
    ctr_device_status: number | null
    ctr_bat_status: number | null
    ctr_bat_temp_status: number | null
    ctr_solar_status: number | null
    ctr_charging_status: number | null
  }

  export type Ecobot_statusMinAggregateOutputType = {
    timestamp: Date | null
    latitude: number | null
    longitude: number | null
    depth_data: number | null
    velocity: number | null
    current_state: number | null
    plc_status: number | null
    ctr_pv_v: number | null
    ctr_pv_c: number | null
    ctr_bat_temp: number | null
    ctr_device_temp: number | null
    ctr_bat_soc: number | null
    ctr_bat_max_v_today: number | null
    ctr_bat_min_v_today: number | null
    ctr_gen_energy_today: number | null
    ctr_gen_energy_month: number | null
    ctr_gen_energy_year: number | null
    ctr_gen_energy_total: number | null
    ctr_bat_v: number | null
    ctr_bat_c: number | null
    ctr_device_status: number | null
    ctr_bat_status: number | null
    ctr_bat_temp_status: number | null
    ctr_solar_status: number | null
    ctr_charging_status: number | null
    robot_id: string | null
  }

  export type Ecobot_statusMaxAggregateOutputType = {
    timestamp: Date | null
    latitude: number | null
    longitude: number | null
    depth_data: number | null
    velocity: number | null
    current_state: number | null
    plc_status: number | null
    ctr_pv_v: number | null
    ctr_pv_c: number | null
    ctr_bat_temp: number | null
    ctr_device_temp: number | null
    ctr_bat_soc: number | null
    ctr_bat_max_v_today: number | null
    ctr_bat_min_v_today: number | null
    ctr_gen_energy_today: number | null
    ctr_gen_energy_month: number | null
    ctr_gen_energy_year: number | null
    ctr_gen_energy_total: number | null
    ctr_bat_v: number | null
    ctr_bat_c: number | null
    ctr_device_status: number | null
    ctr_bat_status: number | null
    ctr_bat_temp_status: number | null
    ctr_solar_status: number | null
    ctr_charging_status: number | null
    robot_id: string | null
  }

  export type Ecobot_statusCountAggregateOutputType = {
    timestamp: number
    latitude: number
    longitude: number
    depth_data: number
    velocity: number
    current_state: number
    plc_status: number
    pump_values: number
    ctr_pv_v: number
    ctr_pv_c: number
    ctr_bat_temp: number
    ctr_device_temp: number
    ctr_bat_soc: number
    ctr_bat_max_v_today: number
    ctr_bat_min_v_today: number
    ctr_gen_energy_today: number
    ctr_gen_energy_month: number
    ctr_gen_energy_year: number
    ctr_gen_energy_total: number
    ctr_bat_v: number
    ctr_bat_c: number
    ctr_device_status: number
    ctr_bat_status: number
    ctr_bat_temp_status: number
    ctr_solar_status: number
    ctr_charging_status: number
    robot_id: number
    _all: number
  }


  export type Ecobot_statusAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    depth_data?: true
    velocity?: true
    current_state?: true
    plc_status?: true
    pump_values?: true
    ctr_pv_v?: true
    ctr_pv_c?: true
    ctr_bat_temp?: true
    ctr_device_temp?: true
    ctr_bat_soc?: true
    ctr_bat_max_v_today?: true
    ctr_bat_min_v_today?: true
    ctr_gen_energy_today?: true
    ctr_gen_energy_month?: true
    ctr_gen_energy_year?: true
    ctr_gen_energy_total?: true
    ctr_bat_v?: true
    ctr_bat_c?: true
    ctr_device_status?: true
    ctr_bat_status?: true
    ctr_bat_temp_status?: true
    ctr_solar_status?: true
    ctr_charging_status?: true
  }

  export type Ecobot_statusSumAggregateInputType = {
    latitude?: true
    longitude?: true
    depth_data?: true
    velocity?: true
    current_state?: true
    plc_status?: true
    pump_values?: true
    ctr_pv_v?: true
    ctr_pv_c?: true
    ctr_bat_temp?: true
    ctr_device_temp?: true
    ctr_bat_soc?: true
    ctr_bat_max_v_today?: true
    ctr_bat_min_v_today?: true
    ctr_gen_energy_today?: true
    ctr_gen_energy_month?: true
    ctr_gen_energy_year?: true
    ctr_gen_energy_total?: true
    ctr_bat_v?: true
    ctr_bat_c?: true
    ctr_device_status?: true
    ctr_bat_status?: true
    ctr_bat_temp_status?: true
    ctr_solar_status?: true
    ctr_charging_status?: true
  }

  export type Ecobot_statusMinAggregateInputType = {
    timestamp?: true
    latitude?: true
    longitude?: true
    depth_data?: true
    velocity?: true
    current_state?: true
    plc_status?: true
    ctr_pv_v?: true
    ctr_pv_c?: true
    ctr_bat_temp?: true
    ctr_device_temp?: true
    ctr_bat_soc?: true
    ctr_bat_max_v_today?: true
    ctr_bat_min_v_today?: true
    ctr_gen_energy_today?: true
    ctr_gen_energy_month?: true
    ctr_gen_energy_year?: true
    ctr_gen_energy_total?: true
    ctr_bat_v?: true
    ctr_bat_c?: true
    ctr_device_status?: true
    ctr_bat_status?: true
    ctr_bat_temp_status?: true
    ctr_solar_status?: true
    ctr_charging_status?: true
    robot_id?: true
  }

  export type Ecobot_statusMaxAggregateInputType = {
    timestamp?: true
    latitude?: true
    longitude?: true
    depth_data?: true
    velocity?: true
    current_state?: true
    plc_status?: true
    ctr_pv_v?: true
    ctr_pv_c?: true
    ctr_bat_temp?: true
    ctr_device_temp?: true
    ctr_bat_soc?: true
    ctr_bat_max_v_today?: true
    ctr_bat_min_v_today?: true
    ctr_gen_energy_today?: true
    ctr_gen_energy_month?: true
    ctr_gen_energy_year?: true
    ctr_gen_energy_total?: true
    ctr_bat_v?: true
    ctr_bat_c?: true
    ctr_device_status?: true
    ctr_bat_status?: true
    ctr_bat_temp_status?: true
    ctr_solar_status?: true
    ctr_charging_status?: true
    robot_id?: true
  }

  export type Ecobot_statusCountAggregateInputType = {
    timestamp?: true
    latitude?: true
    longitude?: true
    depth_data?: true
    velocity?: true
    current_state?: true
    plc_status?: true
    pump_values?: true
    ctr_pv_v?: true
    ctr_pv_c?: true
    ctr_bat_temp?: true
    ctr_device_temp?: true
    ctr_bat_soc?: true
    ctr_bat_max_v_today?: true
    ctr_bat_min_v_today?: true
    ctr_gen_energy_today?: true
    ctr_gen_energy_month?: true
    ctr_gen_energy_year?: true
    ctr_gen_energy_total?: true
    ctr_bat_v?: true
    ctr_bat_c?: true
    ctr_device_status?: true
    ctr_bat_status?: true
    ctr_bat_temp_status?: true
    ctr_solar_status?: true
    ctr_charging_status?: true
    robot_id?: true
    _all?: true
  }

  export type Ecobot_statusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ecobot_status to aggregate.
     */
    where?: ecobot_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ecobot_statuses to fetch.
     */
    orderBy?: ecobot_statusOrderByWithRelationInput | ecobot_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ecobot_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ecobot_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ecobot_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ecobot_statuses
    **/
    _count?: true | Ecobot_statusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ecobot_statusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ecobot_statusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ecobot_statusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ecobot_statusMaxAggregateInputType
  }

  export type GetEcobot_statusAggregateType<T extends Ecobot_statusAggregateArgs> = {
        [P in keyof T & keyof AggregateEcobot_status]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEcobot_status[P]>
      : GetScalarType<T[P], AggregateEcobot_status[P]>
  }




  export type ecobot_statusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ecobot_statusWhereInput
    orderBy?: ecobot_statusOrderByWithAggregationInput | ecobot_statusOrderByWithAggregationInput[]
    by: Ecobot_statusScalarFieldEnum[] | Ecobot_statusScalarFieldEnum
    having?: ecobot_statusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ecobot_statusCountAggregateInputType | true
    _avg?: Ecobot_statusAvgAggregateInputType
    _sum?: Ecobot_statusSumAggregateInputType
    _min?: Ecobot_statusMinAggregateInputType
    _max?: Ecobot_statusMaxAggregateInputType
  }

  export type Ecobot_statusGroupByOutputType = {
    timestamp: Date
    latitude: number
    longitude: number
    depth_data: number | null
    velocity: number | null
    current_state: number | null
    plc_status: number | null
    pump_values: number[]
    ctr_pv_v: number | null
    ctr_pv_c: number | null
    ctr_bat_temp: number | null
    ctr_device_temp: number | null
    ctr_bat_soc: number | null
    ctr_bat_max_v_today: number | null
    ctr_bat_min_v_today: number | null
    ctr_gen_energy_today: number | null
    ctr_gen_energy_month: number | null
    ctr_gen_energy_year: number | null
    ctr_gen_energy_total: number | null
    ctr_bat_v: number | null
    ctr_bat_c: number | null
    ctr_device_status: number | null
    ctr_bat_status: number | null
    ctr_bat_temp_status: number | null
    ctr_solar_status: number | null
    ctr_charging_status: number | null
    robot_id: string
    _count: Ecobot_statusCountAggregateOutputType | null
    _avg: Ecobot_statusAvgAggregateOutputType | null
    _sum: Ecobot_statusSumAggregateOutputType | null
    _min: Ecobot_statusMinAggregateOutputType | null
    _max: Ecobot_statusMaxAggregateOutputType | null
  }

  type GetEcobot_statusGroupByPayload<T extends ecobot_statusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ecobot_statusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ecobot_statusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ecobot_statusGroupByOutputType[P]>
            : GetScalarType<T[P], Ecobot_statusGroupByOutputType[P]>
        }
      >
    >


  export type ecobot_statusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timestamp?: boolean
    latitude?: boolean
    longitude?: boolean
    depth_data?: boolean
    velocity?: boolean
    current_state?: boolean
    plc_status?: boolean
    pump_values?: boolean
    ctr_pv_v?: boolean
    ctr_pv_c?: boolean
    ctr_bat_temp?: boolean
    ctr_device_temp?: boolean
    ctr_bat_soc?: boolean
    ctr_bat_max_v_today?: boolean
    ctr_bat_min_v_today?: boolean
    ctr_gen_energy_today?: boolean
    ctr_gen_energy_month?: boolean
    ctr_gen_energy_year?: boolean
    ctr_gen_energy_total?: boolean
    ctr_bat_v?: boolean
    ctr_bat_c?: boolean
    ctr_device_status?: boolean
    ctr_bat_status?: boolean
    ctr_bat_temp_status?: boolean
    ctr_solar_status?: boolean
    ctr_charging_status?: boolean
    robot_id?: boolean
  }, ExtArgs["result"]["ecobot_status"]>

  export type ecobot_statusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timestamp?: boolean
    latitude?: boolean
    longitude?: boolean
    depth_data?: boolean
    velocity?: boolean
    current_state?: boolean
    plc_status?: boolean
    pump_values?: boolean
    ctr_pv_v?: boolean
    ctr_pv_c?: boolean
    ctr_bat_temp?: boolean
    ctr_device_temp?: boolean
    ctr_bat_soc?: boolean
    ctr_bat_max_v_today?: boolean
    ctr_bat_min_v_today?: boolean
    ctr_gen_energy_today?: boolean
    ctr_gen_energy_month?: boolean
    ctr_gen_energy_year?: boolean
    ctr_gen_energy_total?: boolean
    ctr_bat_v?: boolean
    ctr_bat_c?: boolean
    ctr_device_status?: boolean
    ctr_bat_status?: boolean
    ctr_bat_temp_status?: boolean
    ctr_solar_status?: boolean
    ctr_charging_status?: boolean
    robot_id?: boolean
  }, ExtArgs["result"]["ecobot_status"]>

  export type ecobot_statusSelectScalar = {
    timestamp?: boolean
    latitude?: boolean
    longitude?: boolean
    depth_data?: boolean
    velocity?: boolean
    current_state?: boolean
    plc_status?: boolean
    pump_values?: boolean
    ctr_pv_v?: boolean
    ctr_pv_c?: boolean
    ctr_bat_temp?: boolean
    ctr_device_temp?: boolean
    ctr_bat_soc?: boolean
    ctr_bat_max_v_today?: boolean
    ctr_bat_min_v_today?: boolean
    ctr_gen_energy_today?: boolean
    ctr_gen_energy_month?: boolean
    ctr_gen_energy_year?: boolean
    ctr_gen_energy_total?: boolean
    ctr_bat_v?: boolean
    ctr_bat_c?: boolean
    ctr_device_status?: boolean
    ctr_bat_status?: boolean
    ctr_bat_temp_status?: boolean
    ctr_solar_status?: boolean
    ctr_charging_status?: boolean
    robot_id?: boolean
  }


  export type $ecobot_statusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ecobot_status"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      timestamp: Date
      latitude: number
      longitude: number
      depth_data: number | null
      velocity: number | null
      current_state: number | null
      plc_status: number | null
      pump_values: number[]
      ctr_pv_v: number | null
      ctr_pv_c: number | null
      ctr_bat_temp: number | null
      ctr_device_temp: number | null
      ctr_bat_soc: number | null
      ctr_bat_max_v_today: number | null
      ctr_bat_min_v_today: number | null
      ctr_gen_energy_today: number | null
      ctr_gen_energy_month: number | null
      ctr_gen_energy_year: number | null
      ctr_gen_energy_total: number | null
      ctr_bat_v: number | null
      ctr_bat_c: number | null
      ctr_device_status: number | null
      ctr_bat_status: number | null
      ctr_bat_temp_status: number | null
      ctr_solar_status: number | null
      ctr_charging_status: number | null
      robot_id: string
    }, ExtArgs["result"]["ecobot_status"]>
    composites: {}
  }

  type ecobot_statusGetPayload<S extends boolean | null | undefined | ecobot_statusDefaultArgs> = $Result.GetResult<Prisma.$ecobot_statusPayload, S>

  type ecobot_statusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ecobot_statusFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Ecobot_statusCountAggregateInputType | true
    }

  export interface ecobot_statusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ecobot_status'], meta: { name: 'ecobot_status' } }
    /**
     * Find zero or one Ecobot_status that matches the filter.
     * @param {ecobot_statusFindUniqueArgs} args - Arguments to find a Ecobot_status
     * @example
     * // Get one Ecobot_status
     * const ecobot_status = await prisma.ecobot_status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ecobot_statusFindUniqueArgs>(args: SelectSubset<T, ecobot_statusFindUniqueArgs<ExtArgs>>): Prisma__ecobot_statusClient<$Result.GetResult<Prisma.$ecobot_statusPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ecobot_status that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ecobot_statusFindUniqueOrThrowArgs} args - Arguments to find a Ecobot_status
     * @example
     * // Get one Ecobot_status
     * const ecobot_status = await prisma.ecobot_status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ecobot_statusFindUniqueOrThrowArgs>(args: SelectSubset<T, ecobot_statusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ecobot_statusClient<$Result.GetResult<Prisma.$ecobot_statusPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ecobot_status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecobot_statusFindFirstArgs} args - Arguments to find a Ecobot_status
     * @example
     * // Get one Ecobot_status
     * const ecobot_status = await prisma.ecobot_status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ecobot_statusFindFirstArgs>(args?: SelectSubset<T, ecobot_statusFindFirstArgs<ExtArgs>>): Prisma__ecobot_statusClient<$Result.GetResult<Prisma.$ecobot_statusPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ecobot_status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecobot_statusFindFirstOrThrowArgs} args - Arguments to find a Ecobot_status
     * @example
     * // Get one Ecobot_status
     * const ecobot_status = await prisma.ecobot_status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ecobot_statusFindFirstOrThrowArgs>(args?: SelectSubset<T, ecobot_statusFindFirstOrThrowArgs<ExtArgs>>): Prisma__ecobot_statusClient<$Result.GetResult<Prisma.$ecobot_statusPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ecobot_statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecobot_statusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ecobot_statuses
     * const ecobot_statuses = await prisma.ecobot_status.findMany()
     * 
     * // Get first 10 Ecobot_statuses
     * const ecobot_statuses = await prisma.ecobot_status.findMany({ take: 10 })
     * 
     * // Only select the `timestamp`
     * const ecobot_statusWithTimestampOnly = await prisma.ecobot_status.findMany({ select: { timestamp: true } })
     * 
     */
    findMany<T extends ecobot_statusFindManyArgs>(args?: SelectSubset<T, ecobot_statusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ecobot_statusPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ecobot_status.
     * @param {ecobot_statusCreateArgs} args - Arguments to create a Ecobot_status.
     * @example
     * // Create one Ecobot_status
     * const Ecobot_status = await prisma.ecobot_status.create({
     *   data: {
     *     // ... data to create a Ecobot_status
     *   }
     * })
     * 
     */
    create<T extends ecobot_statusCreateArgs>(args: SelectSubset<T, ecobot_statusCreateArgs<ExtArgs>>): Prisma__ecobot_statusClient<$Result.GetResult<Prisma.$ecobot_statusPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ecobot_statuses.
     * @param {ecobot_statusCreateManyArgs} args - Arguments to create many Ecobot_statuses.
     * @example
     * // Create many Ecobot_statuses
     * const ecobot_status = await prisma.ecobot_status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ecobot_statusCreateManyArgs>(args?: SelectSubset<T, ecobot_statusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ecobot_statuses and returns the data saved in the database.
     * @param {ecobot_statusCreateManyAndReturnArgs} args - Arguments to create many Ecobot_statuses.
     * @example
     * // Create many Ecobot_statuses
     * const ecobot_status = await prisma.ecobot_status.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ecobot_statuses and only return the `timestamp`
     * const ecobot_statusWithTimestampOnly = await prisma.ecobot_status.createManyAndReturn({ 
     *   select: { timestamp: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ecobot_statusCreateManyAndReturnArgs>(args?: SelectSubset<T, ecobot_statusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ecobot_statusPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ecobot_status.
     * @param {ecobot_statusDeleteArgs} args - Arguments to delete one Ecobot_status.
     * @example
     * // Delete one Ecobot_status
     * const Ecobot_status = await prisma.ecobot_status.delete({
     *   where: {
     *     // ... filter to delete one Ecobot_status
     *   }
     * })
     * 
     */
    delete<T extends ecobot_statusDeleteArgs>(args: SelectSubset<T, ecobot_statusDeleteArgs<ExtArgs>>): Prisma__ecobot_statusClient<$Result.GetResult<Prisma.$ecobot_statusPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ecobot_status.
     * @param {ecobot_statusUpdateArgs} args - Arguments to update one Ecobot_status.
     * @example
     * // Update one Ecobot_status
     * const ecobot_status = await prisma.ecobot_status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ecobot_statusUpdateArgs>(args: SelectSubset<T, ecobot_statusUpdateArgs<ExtArgs>>): Prisma__ecobot_statusClient<$Result.GetResult<Prisma.$ecobot_statusPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ecobot_statuses.
     * @param {ecobot_statusDeleteManyArgs} args - Arguments to filter Ecobot_statuses to delete.
     * @example
     * // Delete a few Ecobot_statuses
     * const { count } = await prisma.ecobot_status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ecobot_statusDeleteManyArgs>(args?: SelectSubset<T, ecobot_statusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ecobot_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecobot_statusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ecobot_statuses
     * const ecobot_status = await prisma.ecobot_status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ecobot_statusUpdateManyArgs>(args: SelectSubset<T, ecobot_statusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ecobot_status.
     * @param {ecobot_statusUpsertArgs} args - Arguments to update or create a Ecobot_status.
     * @example
     * // Update or create a Ecobot_status
     * const ecobot_status = await prisma.ecobot_status.upsert({
     *   create: {
     *     // ... data to create a Ecobot_status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ecobot_status we want to update
     *   }
     * })
     */
    upsert<T extends ecobot_statusUpsertArgs>(args: SelectSubset<T, ecobot_statusUpsertArgs<ExtArgs>>): Prisma__ecobot_statusClient<$Result.GetResult<Prisma.$ecobot_statusPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ecobot_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecobot_statusCountArgs} args - Arguments to filter Ecobot_statuses to count.
     * @example
     * // Count the number of Ecobot_statuses
     * const count = await prisma.ecobot_status.count({
     *   where: {
     *     // ... the filter for the Ecobot_statuses we want to count
     *   }
     * })
    **/
    count<T extends ecobot_statusCountArgs>(
      args?: Subset<T, ecobot_statusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ecobot_statusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ecobot_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ecobot_statusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ecobot_statusAggregateArgs>(args: Subset<T, Ecobot_statusAggregateArgs>): Prisma.PrismaPromise<GetEcobot_statusAggregateType<T>>

    /**
     * Group by Ecobot_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecobot_statusGroupByArgs} args - Group by arguments.
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
      T extends ecobot_statusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ecobot_statusGroupByArgs['orderBy'] }
        : { orderBy?: ecobot_statusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ecobot_statusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEcobot_statusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ecobot_status model
   */
  readonly fields: ecobot_statusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ecobot_status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ecobot_statusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ecobot_status model
   */ 
  interface ecobot_statusFieldRefs {
    readonly timestamp: FieldRef<"ecobot_status", 'DateTime'>
    readonly latitude: FieldRef<"ecobot_status", 'Float'>
    readonly longitude: FieldRef<"ecobot_status", 'Float'>
    readonly depth_data: FieldRef<"ecobot_status", 'Float'>
    readonly velocity: FieldRef<"ecobot_status", 'Float'>
    readonly current_state: FieldRef<"ecobot_status", 'Int'>
    readonly plc_status: FieldRef<"ecobot_status", 'Int'>
    readonly pump_values: FieldRef<"ecobot_status", 'Int[]'>
    readonly ctr_pv_v: FieldRef<"ecobot_status", 'Float'>
    readonly ctr_pv_c: FieldRef<"ecobot_status", 'Float'>
    readonly ctr_bat_temp: FieldRef<"ecobot_status", 'Float'>
    readonly ctr_device_temp: FieldRef<"ecobot_status", 'Float'>
    readonly ctr_bat_soc: FieldRef<"ecobot_status", 'Float'>
    readonly ctr_bat_max_v_today: FieldRef<"ecobot_status", 'Float'>
    readonly ctr_bat_min_v_today: FieldRef<"ecobot_status", 'Float'>
    readonly ctr_gen_energy_today: FieldRef<"ecobot_status", 'Float'>
    readonly ctr_gen_energy_month: FieldRef<"ecobot_status", 'Float'>
    readonly ctr_gen_energy_year: FieldRef<"ecobot_status", 'Float'>
    readonly ctr_gen_energy_total: FieldRef<"ecobot_status", 'Float'>
    readonly ctr_bat_v: FieldRef<"ecobot_status", 'Float'>
    readonly ctr_bat_c: FieldRef<"ecobot_status", 'Float'>
    readonly ctr_device_status: FieldRef<"ecobot_status", 'Int'>
    readonly ctr_bat_status: FieldRef<"ecobot_status", 'Int'>
    readonly ctr_bat_temp_status: FieldRef<"ecobot_status", 'Int'>
    readonly ctr_solar_status: FieldRef<"ecobot_status", 'Int'>
    readonly ctr_charging_status: FieldRef<"ecobot_status", 'Int'>
    readonly robot_id: FieldRef<"ecobot_status", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ecobot_status findUnique
   */
  export type ecobot_statusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_status
     */
    select?: ecobot_statusSelect<ExtArgs> | null
    /**
     * Filter, which ecobot_status to fetch.
     */
    where: ecobot_statusWhereUniqueInput
  }

  /**
   * ecobot_status findUniqueOrThrow
   */
  export type ecobot_statusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_status
     */
    select?: ecobot_statusSelect<ExtArgs> | null
    /**
     * Filter, which ecobot_status to fetch.
     */
    where: ecobot_statusWhereUniqueInput
  }

  /**
   * ecobot_status findFirst
   */
  export type ecobot_statusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_status
     */
    select?: ecobot_statusSelect<ExtArgs> | null
    /**
     * Filter, which ecobot_status to fetch.
     */
    where?: ecobot_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ecobot_statuses to fetch.
     */
    orderBy?: ecobot_statusOrderByWithRelationInput | ecobot_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ecobot_statuses.
     */
    cursor?: ecobot_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ecobot_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ecobot_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ecobot_statuses.
     */
    distinct?: Ecobot_statusScalarFieldEnum | Ecobot_statusScalarFieldEnum[]
  }

  /**
   * ecobot_status findFirstOrThrow
   */
  export type ecobot_statusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_status
     */
    select?: ecobot_statusSelect<ExtArgs> | null
    /**
     * Filter, which ecobot_status to fetch.
     */
    where?: ecobot_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ecobot_statuses to fetch.
     */
    orderBy?: ecobot_statusOrderByWithRelationInput | ecobot_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ecobot_statuses.
     */
    cursor?: ecobot_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ecobot_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ecobot_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ecobot_statuses.
     */
    distinct?: Ecobot_statusScalarFieldEnum | Ecobot_statusScalarFieldEnum[]
  }

  /**
   * ecobot_status findMany
   */
  export type ecobot_statusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_status
     */
    select?: ecobot_statusSelect<ExtArgs> | null
    /**
     * Filter, which ecobot_statuses to fetch.
     */
    where?: ecobot_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ecobot_statuses to fetch.
     */
    orderBy?: ecobot_statusOrderByWithRelationInput | ecobot_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ecobot_statuses.
     */
    cursor?: ecobot_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ecobot_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ecobot_statuses.
     */
    skip?: number
    distinct?: Ecobot_statusScalarFieldEnum | Ecobot_statusScalarFieldEnum[]
  }

  /**
   * ecobot_status create
   */
  export type ecobot_statusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_status
     */
    select?: ecobot_statusSelect<ExtArgs> | null
    /**
     * The data needed to create a ecobot_status.
     */
    data: XOR<ecobot_statusCreateInput, ecobot_statusUncheckedCreateInput>
  }

  /**
   * ecobot_status createMany
   */
  export type ecobot_statusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ecobot_statuses.
     */
    data: ecobot_statusCreateManyInput | ecobot_statusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ecobot_status createManyAndReturn
   */
  export type ecobot_statusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_status
     */
    select?: ecobot_statusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ecobot_statuses.
     */
    data: ecobot_statusCreateManyInput | ecobot_statusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ecobot_status update
   */
  export type ecobot_statusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_status
     */
    select?: ecobot_statusSelect<ExtArgs> | null
    /**
     * The data needed to update a ecobot_status.
     */
    data: XOR<ecobot_statusUpdateInput, ecobot_statusUncheckedUpdateInput>
    /**
     * Choose, which ecobot_status to update.
     */
    where: ecobot_statusWhereUniqueInput
  }

  /**
   * ecobot_status updateMany
   */
  export type ecobot_statusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ecobot_statuses.
     */
    data: XOR<ecobot_statusUpdateManyMutationInput, ecobot_statusUncheckedUpdateManyInput>
    /**
     * Filter which ecobot_statuses to update
     */
    where?: ecobot_statusWhereInput
  }

  /**
   * ecobot_status upsert
   */
  export type ecobot_statusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_status
     */
    select?: ecobot_statusSelect<ExtArgs> | null
    /**
     * The filter to search for the ecobot_status to update in case it exists.
     */
    where: ecobot_statusWhereUniqueInput
    /**
     * In case the ecobot_status found by the `where` argument doesn't exist, create a new ecobot_status with this data.
     */
    create: XOR<ecobot_statusCreateInput, ecobot_statusUncheckedCreateInput>
    /**
     * In case the ecobot_status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ecobot_statusUpdateInput, ecobot_statusUncheckedUpdateInput>
  }

  /**
   * ecobot_status delete
   */
  export type ecobot_statusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_status
     */
    select?: ecobot_statusSelect<ExtArgs> | null
    /**
     * Filter which ecobot_status to delete.
     */
    where: ecobot_statusWhereUniqueInput
  }

  /**
   * ecobot_status deleteMany
   */
  export type ecobot_statusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ecobot_statuses to delete
     */
    where?: ecobot_statusWhereInput
  }

  /**
   * ecobot_status without action
   */
  export type ecobot_statusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_status
     */
    select?: ecobot_statusSelect<ExtArgs> | null
  }


  /**
   * Model ecobot_status_temp
   */

  export type AggregateEcobot_status_temp = {
    _count: Ecobot_status_tempCountAggregateOutputType | null
    _avg: Ecobot_status_tempAvgAggregateOutputType | null
    _sum: Ecobot_status_tempSumAggregateOutputType | null
    _min: Ecobot_status_tempMinAggregateOutputType | null
    _max: Ecobot_status_tempMaxAggregateOutputType | null
  }

  export type Ecobot_status_tempAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    yaw: number | null
    current_angular_vel: number | null
    bearing: number | null
    distance: number | null
    course_goal_distance_threshold: number | null
    holding_goal_distance_threshold: number | null
    course_min_velocity: number | null
    holding_min_velocity: number | null
    course_min_ang_velocity: number | null
    holding_min_ang_velocity: number | null
    bearing_diff: number | null
    depth_data: number | null
    velocity: number | null
    velocity_direction: number | null
    current_state: number | null
    current_course_state: number | null
    plc_status: number | null
    motor_values: number | null
    pump_values: number | null
    ctr_pv_v: number | null
    ctr_pv_c: number | null
    ctr_bat_temp: number | null
    ctr_device_temp: number | null
    ctr_bat_soc: number | null
    ctr_bat_max_v_today: number | null
    ctr_bat_min_v_today: number | null
    ctr_gen_energy_today: number | null
    ctr_gen_energy_month: number | null
    ctr_gen_energy_year: number | null
    ctr_gen_energy_total: number | null
    ctr_bat_v: number | null
    ctr_bat_c: number | null
    ctr_device_status: number | null
    ctr_bat_status: number | null
    ctr_bat_temp_status: number | null
    ctr_solar_status: number | null
    ctr_charging_status: number | null
    other_values: number | null
    current_speeds: number | null
  }

  export type Ecobot_status_tempSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    yaw: number | null
    current_angular_vel: number | null
    bearing: number | null
    distance: number | null
    course_goal_distance_threshold: number | null
    holding_goal_distance_threshold: number | null
    course_min_velocity: number | null
    holding_min_velocity: number | null
    course_min_ang_velocity: number | null
    holding_min_ang_velocity: number | null
    bearing_diff: number | null
    depth_data: number | null
    velocity: number | null
    velocity_direction: number | null
    current_state: number | null
    current_course_state: number | null
    plc_status: number | null
    motor_values: number[]
    pump_values: number[]
    ctr_pv_v: number | null
    ctr_pv_c: number | null
    ctr_bat_temp: number | null
    ctr_device_temp: number | null
    ctr_bat_soc: number | null
    ctr_bat_max_v_today: number | null
    ctr_bat_min_v_today: number | null
    ctr_gen_energy_today: number | null
    ctr_gen_energy_month: number | null
    ctr_gen_energy_year: number | null
    ctr_gen_energy_total: number | null
    ctr_bat_v: number | null
    ctr_bat_c: number | null
    ctr_device_status: number | null
    ctr_bat_status: number | null
    ctr_bat_temp_status: number | null
    ctr_solar_status: number | null
    ctr_charging_status: number | null
    other_values: number[]
    current_speeds: number[]
  }

  export type Ecobot_status_tempMinAggregateOutputType = {
    timestamp: Date | null
    latitude: number | null
    longitude: number | null
    yaw: number | null
    current_angular_vel: number | null
    bearing: number | null
    distance: number | null
    course_goal_distance_threshold: number | null
    holding_goal_distance_threshold: number | null
    course_min_velocity: number | null
    holding_min_velocity: number | null
    course_min_ang_velocity: number | null
    holding_min_ang_velocity: number | null
    bearing_diff: number | null
    depth_data: number | null
    velocity: number | null
    velocity_direction: number | null
    current_state: number | null
    current_course_state: number | null
    plc_status: number | null
    ctr_pv_v: number | null
    ctr_pv_c: number | null
    ctr_bat_temp: number | null
    ctr_device_temp: number | null
    ctr_bat_soc: number | null
    ctr_bat_max_v_today: number | null
    ctr_bat_min_v_today: number | null
    ctr_gen_energy_today: number | null
    ctr_gen_energy_month: number | null
    ctr_gen_energy_year: number | null
    ctr_gen_energy_total: number | null
    ctr_bat_v: number | null
    ctr_bat_c: number | null
    ctr_device_status: number | null
    ctr_bat_status: number | null
    ctr_bat_temp_status: number | null
    ctr_solar_status: number | null
    ctr_charging_status: number | null
    robot_id: string | null
  }

  export type Ecobot_status_tempMaxAggregateOutputType = {
    timestamp: Date | null
    latitude: number | null
    longitude: number | null
    yaw: number | null
    current_angular_vel: number | null
    bearing: number | null
    distance: number | null
    course_goal_distance_threshold: number | null
    holding_goal_distance_threshold: number | null
    course_min_velocity: number | null
    holding_min_velocity: number | null
    course_min_ang_velocity: number | null
    holding_min_ang_velocity: number | null
    bearing_diff: number | null
    depth_data: number | null
    velocity: number | null
    velocity_direction: number | null
    current_state: number | null
    current_course_state: number | null
    plc_status: number | null
    ctr_pv_v: number | null
    ctr_pv_c: number | null
    ctr_bat_temp: number | null
    ctr_device_temp: number | null
    ctr_bat_soc: number | null
    ctr_bat_max_v_today: number | null
    ctr_bat_min_v_today: number | null
    ctr_gen_energy_today: number | null
    ctr_gen_energy_month: number | null
    ctr_gen_energy_year: number | null
    ctr_gen_energy_total: number | null
    ctr_bat_v: number | null
    ctr_bat_c: number | null
    ctr_device_status: number | null
    ctr_bat_status: number | null
    ctr_bat_temp_status: number | null
    ctr_solar_status: number | null
    ctr_charging_status: number | null
    robot_id: string | null
  }

  export type Ecobot_status_tempCountAggregateOutputType = {
    timestamp: number
    latitude: number
    longitude: number
    yaw: number
    current_angular_vel: number
    bearing: number
    distance: number
    course_goal_distance_threshold: number
    holding_goal_distance_threshold: number
    course_min_velocity: number
    holding_min_velocity: number
    course_min_ang_velocity: number
    holding_min_ang_velocity: number
    bearing_diff: number
    depth_data: number
    velocity: number
    velocity_direction: number
    current_state: number
    current_course_state: number
    plc_status: number
    motor_values: number
    pump_values: number
    ctr_pv_v: number
    ctr_pv_c: number
    ctr_bat_temp: number
    ctr_device_temp: number
    ctr_bat_soc: number
    ctr_bat_max_v_today: number
    ctr_bat_min_v_today: number
    ctr_gen_energy_today: number
    ctr_gen_energy_month: number
    ctr_gen_energy_year: number
    ctr_gen_energy_total: number
    ctr_bat_v: number
    ctr_bat_c: number
    ctr_device_status: number
    ctr_bat_status: number
    ctr_bat_temp_status: number
    ctr_solar_status: number
    ctr_charging_status: number
    other_values: number
    current_speeds: number
    robot_id: number
    _all: number
  }


  export type Ecobot_status_tempAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    yaw?: true
    current_angular_vel?: true
    bearing?: true
    distance?: true
    course_goal_distance_threshold?: true
    holding_goal_distance_threshold?: true
    course_min_velocity?: true
    holding_min_velocity?: true
    course_min_ang_velocity?: true
    holding_min_ang_velocity?: true
    bearing_diff?: true
    depth_data?: true
    velocity?: true
    velocity_direction?: true
    current_state?: true
    current_course_state?: true
    plc_status?: true
    motor_values?: true
    pump_values?: true
    ctr_pv_v?: true
    ctr_pv_c?: true
    ctr_bat_temp?: true
    ctr_device_temp?: true
    ctr_bat_soc?: true
    ctr_bat_max_v_today?: true
    ctr_bat_min_v_today?: true
    ctr_gen_energy_today?: true
    ctr_gen_energy_month?: true
    ctr_gen_energy_year?: true
    ctr_gen_energy_total?: true
    ctr_bat_v?: true
    ctr_bat_c?: true
    ctr_device_status?: true
    ctr_bat_status?: true
    ctr_bat_temp_status?: true
    ctr_solar_status?: true
    ctr_charging_status?: true
    other_values?: true
    current_speeds?: true
  }

  export type Ecobot_status_tempSumAggregateInputType = {
    latitude?: true
    longitude?: true
    yaw?: true
    current_angular_vel?: true
    bearing?: true
    distance?: true
    course_goal_distance_threshold?: true
    holding_goal_distance_threshold?: true
    course_min_velocity?: true
    holding_min_velocity?: true
    course_min_ang_velocity?: true
    holding_min_ang_velocity?: true
    bearing_diff?: true
    depth_data?: true
    velocity?: true
    velocity_direction?: true
    current_state?: true
    current_course_state?: true
    plc_status?: true
    motor_values?: true
    pump_values?: true
    ctr_pv_v?: true
    ctr_pv_c?: true
    ctr_bat_temp?: true
    ctr_device_temp?: true
    ctr_bat_soc?: true
    ctr_bat_max_v_today?: true
    ctr_bat_min_v_today?: true
    ctr_gen_energy_today?: true
    ctr_gen_energy_month?: true
    ctr_gen_energy_year?: true
    ctr_gen_energy_total?: true
    ctr_bat_v?: true
    ctr_bat_c?: true
    ctr_device_status?: true
    ctr_bat_status?: true
    ctr_bat_temp_status?: true
    ctr_solar_status?: true
    ctr_charging_status?: true
    other_values?: true
    current_speeds?: true
  }

  export type Ecobot_status_tempMinAggregateInputType = {
    timestamp?: true
    latitude?: true
    longitude?: true
    yaw?: true
    current_angular_vel?: true
    bearing?: true
    distance?: true
    course_goal_distance_threshold?: true
    holding_goal_distance_threshold?: true
    course_min_velocity?: true
    holding_min_velocity?: true
    course_min_ang_velocity?: true
    holding_min_ang_velocity?: true
    bearing_diff?: true
    depth_data?: true
    velocity?: true
    velocity_direction?: true
    current_state?: true
    current_course_state?: true
    plc_status?: true
    ctr_pv_v?: true
    ctr_pv_c?: true
    ctr_bat_temp?: true
    ctr_device_temp?: true
    ctr_bat_soc?: true
    ctr_bat_max_v_today?: true
    ctr_bat_min_v_today?: true
    ctr_gen_energy_today?: true
    ctr_gen_energy_month?: true
    ctr_gen_energy_year?: true
    ctr_gen_energy_total?: true
    ctr_bat_v?: true
    ctr_bat_c?: true
    ctr_device_status?: true
    ctr_bat_status?: true
    ctr_bat_temp_status?: true
    ctr_solar_status?: true
    ctr_charging_status?: true
    robot_id?: true
  }

  export type Ecobot_status_tempMaxAggregateInputType = {
    timestamp?: true
    latitude?: true
    longitude?: true
    yaw?: true
    current_angular_vel?: true
    bearing?: true
    distance?: true
    course_goal_distance_threshold?: true
    holding_goal_distance_threshold?: true
    course_min_velocity?: true
    holding_min_velocity?: true
    course_min_ang_velocity?: true
    holding_min_ang_velocity?: true
    bearing_diff?: true
    depth_data?: true
    velocity?: true
    velocity_direction?: true
    current_state?: true
    current_course_state?: true
    plc_status?: true
    ctr_pv_v?: true
    ctr_pv_c?: true
    ctr_bat_temp?: true
    ctr_device_temp?: true
    ctr_bat_soc?: true
    ctr_bat_max_v_today?: true
    ctr_bat_min_v_today?: true
    ctr_gen_energy_today?: true
    ctr_gen_energy_month?: true
    ctr_gen_energy_year?: true
    ctr_gen_energy_total?: true
    ctr_bat_v?: true
    ctr_bat_c?: true
    ctr_device_status?: true
    ctr_bat_status?: true
    ctr_bat_temp_status?: true
    ctr_solar_status?: true
    ctr_charging_status?: true
    robot_id?: true
  }

  export type Ecobot_status_tempCountAggregateInputType = {
    timestamp?: true
    latitude?: true
    longitude?: true
    yaw?: true
    current_angular_vel?: true
    bearing?: true
    distance?: true
    course_goal_distance_threshold?: true
    holding_goal_distance_threshold?: true
    course_min_velocity?: true
    holding_min_velocity?: true
    course_min_ang_velocity?: true
    holding_min_ang_velocity?: true
    bearing_diff?: true
    depth_data?: true
    velocity?: true
    velocity_direction?: true
    current_state?: true
    current_course_state?: true
    plc_status?: true
    motor_values?: true
    pump_values?: true
    ctr_pv_v?: true
    ctr_pv_c?: true
    ctr_bat_temp?: true
    ctr_device_temp?: true
    ctr_bat_soc?: true
    ctr_bat_max_v_today?: true
    ctr_bat_min_v_today?: true
    ctr_gen_energy_today?: true
    ctr_gen_energy_month?: true
    ctr_gen_energy_year?: true
    ctr_gen_energy_total?: true
    ctr_bat_v?: true
    ctr_bat_c?: true
    ctr_device_status?: true
    ctr_bat_status?: true
    ctr_bat_temp_status?: true
    ctr_solar_status?: true
    ctr_charging_status?: true
    other_values?: true
    current_speeds?: true
    robot_id?: true
    _all?: true
  }

  export type Ecobot_status_tempAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ecobot_status_temp to aggregate.
     */
    where?: ecobot_status_tempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ecobot_status_temps to fetch.
     */
    orderBy?: ecobot_status_tempOrderByWithRelationInput | ecobot_status_tempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ecobot_status_tempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ecobot_status_temps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ecobot_status_temps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ecobot_status_temps
    **/
    _count?: true | Ecobot_status_tempCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ecobot_status_tempAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ecobot_status_tempSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ecobot_status_tempMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ecobot_status_tempMaxAggregateInputType
  }

  export type GetEcobot_status_tempAggregateType<T extends Ecobot_status_tempAggregateArgs> = {
        [P in keyof T & keyof AggregateEcobot_status_temp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEcobot_status_temp[P]>
      : GetScalarType<T[P], AggregateEcobot_status_temp[P]>
  }




  export type ecobot_status_tempGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ecobot_status_tempWhereInput
    orderBy?: ecobot_status_tempOrderByWithAggregationInput | ecobot_status_tempOrderByWithAggregationInput[]
    by: Ecobot_status_tempScalarFieldEnum[] | Ecobot_status_tempScalarFieldEnum
    having?: ecobot_status_tempScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ecobot_status_tempCountAggregateInputType | true
    _avg?: Ecobot_status_tempAvgAggregateInputType
    _sum?: Ecobot_status_tempSumAggregateInputType
    _min?: Ecobot_status_tempMinAggregateInputType
    _max?: Ecobot_status_tempMaxAggregateInputType
  }

  export type Ecobot_status_tempGroupByOutputType = {
    timestamp: Date
    latitude: number
    longitude: number
    yaw: number | null
    current_angular_vel: number | null
    bearing: number | null
    distance: number | null
    course_goal_distance_threshold: number | null
    holding_goal_distance_threshold: number | null
    course_min_velocity: number | null
    holding_min_velocity: number | null
    course_min_ang_velocity: number | null
    holding_min_ang_velocity: number | null
    bearing_diff: number | null
    depth_data: number | null
    velocity: number | null
    velocity_direction: number | null
    current_state: number | null
    current_course_state: number | null
    plc_status: number | null
    motor_values: number[]
    pump_values: number[]
    ctr_pv_v: number | null
    ctr_pv_c: number | null
    ctr_bat_temp: number | null
    ctr_device_temp: number | null
    ctr_bat_soc: number | null
    ctr_bat_max_v_today: number | null
    ctr_bat_min_v_today: number | null
    ctr_gen_energy_today: number | null
    ctr_gen_energy_month: number | null
    ctr_gen_energy_year: number | null
    ctr_gen_energy_total: number | null
    ctr_bat_v: number | null
    ctr_bat_c: number | null
    ctr_device_status: number | null
    ctr_bat_status: number | null
    ctr_bat_temp_status: number | null
    ctr_solar_status: number | null
    ctr_charging_status: number | null
    other_values: number[]
    current_speeds: number[]
    robot_id: string
    _count: Ecobot_status_tempCountAggregateOutputType | null
    _avg: Ecobot_status_tempAvgAggregateOutputType | null
    _sum: Ecobot_status_tempSumAggregateOutputType | null
    _min: Ecobot_status_tempMinAggregateOutputType | null
    _max: Ecobot_status_tempMaxAggregateOutputType | null
  }

  type GetEcobot_status_tempGroupByPayload<T extends ecobot_status_tempGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ecobot_status_tempGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ecobot_status_tempGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ecobot_status_tempGroupByOutputType[P]>
            : GetScalarType<T[P], Ecobot_status_tempGroupByOutputType[P]>
        }
      >
    >


  export type ecobot_status_tempSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timestamp?: boolean
    latitude?: boolean
    longitude?: boolean
    yaw?: boolean
    current_angular_vel?: boolean
    bearing?: boolean
    distance?: boolean
    course_goal_distance_threshold?: boolean
    holding_goal_distance_threshold?: boolean
    course_min_velocity?: boolean
    holding_min_velocity?: boolean
    course_min_ang_velocity?: boolean
    holding_min_ang_velocity?: boolean
    bearing_diff?: boolean
    depth_data?: boolean
    velocity?: boolean
    velocity_direction?: boolean
    current_state?: boolean
    current_course_state?: boolean
    plc_status?: boolean
    motor_values?: boolean
    pump_values?: boolean
    ctr_pv_v?: boolean
    ctr_pv_c?: boolean
    ctr_bat_temp?: boolean
    ctr_device_temp?: boolean
    ctr_bat_soc?: boolean
    ctr_bat_max_v_today?: boolean
    ctr_bat_min_v_today?: boolean
    ctr_gen_energy_today?: boolean
    ctr_gen_energy_month?: boolean
    ctr_gen_energy_year?: boolean
    ctr_gen_energy_total?: boolean
    ctr_bat_v?: boolean
    ctr_bat_c?: boolean
    ctr_device_status?: boolean
    ctr_bat_status?: boolean
    ctr_bat_temp_status?: boolean
    ctr_solar_status?: boolean
    ctr_charging_status?: boolean
    other_values?: boolean
    current_speeds?: boolean
    robot_id?: boolean
  }, ExtArgs["result"]["ecobot_status_temp"]>

  export type ecobot_status_tempSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timestamp?: boolean
    latitude?: boolean
    longitude?: boolean
    yaw?: boolean
    current_angular_vel?: boolean
    bearing?: boolean
    distance?: boolean
    course_goal_distance_threshold?: boolean
    holding_goal_distance_threshold?: boolean
    course_min_velocity?: boolean
    holding_min_velocity?: boolean
    course_min_ang_velocity?: boolean
    holding_min_ang_velocity?: boolean
    bearing_diff?: boolean
    depth_data?: boolean
    velocity?: boolean
    velocity_direction?: boolean
    current_state?: boolean
    current_course_state?: boolean
    plc_status?: boolean
    motor_values?: boolean
    pump_values?: boolean
    ctr_pv_v?: boolean
    ctr_pv_c?: boolean
    ctr_bat_temp?: boolean
    ctr_device_temp?: boolean
    ctr_bat_soc?: boolean
    ctr_bat_max_v_today?: boolean
    ctr_bat_min_v_today?: boolean
    ctr_gen_energy_today?: boolean
    ctr_gen_energy_month?: boolean
    ctr_gen_energy_year?: boolean
    ctr_gen_energy_total?: boolean
    ctr_bat_v?: boolean
    ctr_bat_c?: boolean
    ctr_device_status?: boolean
    ctr_bat_status?: boolean
    ctr_bat_temp_status?: boolean
    ctr_solar_status?: boolean
    ctr_charging_status?: boolean
    other_values?: boolean
    current_speeds?: boolean
    robot_id?: boolean
  }, ExtArgs["result"]["ecobot_status_temp"]>

  export type ecobot_status_tempSelectScalar = {
    timestamp?: boolean
    latitude?: boolean
    longitude?: boolean
    yaw?: boolean
    current_angular_vel?: boolean
    bearing?: boolean
    distance?: boolean
    course_goal_distance_threshold?: boolean
    holding_goal_distance_threshold?: boolean
    course_min_velocity?: boolean
    holding_min_velocity?: boolean
    course_min_ang_velocity?: boolean
    holding_min_ang_velocity?: boolean
    bearing_diff?: boolean
    depth_data?: boolean
    velocity?: boolean
    velocity_direction?: boolean
    current_state?: boolean
    current_course_state?: boolean
    plc_status?: boolean
    motor_values?: boolean
    pump_values?: boolean
    ctr_pv_v?: boolean
    ctr_pv_c?: boolean
    ctr_bat_temp?: boolean
    ctr_device_temp?: boolean
    ctr_bat_soc?: boolean
    ctr_bat_max_v_today?: boolean
    ctr_bat_min_v_today?: boolean
    ctr_gen_energy_today?: boolean
    ctr_gen_energy_month?: boolean
    ctr_gen_energy_year?: boolean
    ctr_gen_energy_total?: boolean
    ctr_bat_v?: boolean
    ctr_bat_c?: boolean
    ctr_device_status?: boolean
    ctr_bat_status?: boolean
    ctr_bat_temp_status?: boolean
    ctr_solar_status?: boolean
    ctr_charging_status?: boolean
    other_values?: boolean
    current_speeds?: boolean
    robot_id?: boolean
  }


  export type $ecobot_status_tempPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ecobot_status_temp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      timestamp: Date
      latitude: number
      longitude: number
      yaw: number | null
      current_angular_vel: number | null
      bearing: number | null
      distance: number | null
      course_goal_distance_threshold: number | null
      holding_goal_distance_threshold: number | null
      course_min_velocity: number | null
      holding_min_velocity: number | null
      course_min_ang_velocity: number | null
      holding_min_ang_velocity: number | null
      bearing_diff: number | null
      depth_data: number | null
      velocity: number | null
      velocity_direction: number | null
      current_state: number | null
      current_course_state: number | null
      plc_status: number | null
      motor_values: number[]
      pump_values: number[]
      ctr_pv_v: number | null
      ctr_pv_c: number | null
      ctr_bat_temp: number | null
      ctr_device_temp: number | null
      ctr_bat_soc: number | null
      ctr_bat_max_v_today: number | null
      ctr_bat_min_v_today: number | null
      ctr_gen_energy_today: number | null
      ctr_gen_energy_month: number | null
      ctr_gen_energy_year: number | null
      ctr_gen_energy_total: number | null
      ctr_bat_v: number | null
      ctr_bat_c: number | null
      ctr_device_status: number | null
      ctr_bat_status: number | null
      ctr_bat_temp_status: number | null
      ctr_solar_status: number | null
      ctr_charging_status: number | null
      other_values: number[]
      current_speeds: number[]
      robot_id: string
    }, ExtArgs["result"]["ecobot_status_temp"]>
    composites: {}
  }

  type ecobot_status_tempGetPayload<S extends boolean | null | undefined | ecobot_status_tempDefaultArgs> = $Result.GetResult<Prisma.$ecobot_status_tempPayload, S>

  type ecobot_status_tempCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ecobot_status_tempFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Ecobot_status_tempCountAggregateInputType | true
    }

  export interface ecobot_status_tempDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ecobot_status_temp'], meta: { name: 'ecobot_status_temp' } }
    /**
     * Find zero or one Ecobot_status_temp that matches the filter.
     * @param {ecobot_status_tempFindUniqueArgs} args - Arguments to find a Ecobot_status_temp
     * @example
     * // Get one Ecobot_status_temp
     * const ecobot_status_temp = await prisma.ecobot_status_temp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ecobot_status_tempFindUniqueArgs>(args: SelectSubset<T, ecobot_status_tempFindUniqueArgs<ExtArgs>>): Prisma__ecobot_status_tempClient<$Result.GetResult<Prisma.$ecobot_status_tempPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ecobot_status_temp that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ecobot_status_tempFindUniqueOrThrowArgs} args - Arguments to find a Ecobot_status_temp
     * @example
     * // Get one Ecobot_status_temp
     * const ecobot_status_temp = await prisma.ecobot_status_temp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ecobot_status_tempFindUniqueOrThrowArgs>(args: SelectSubset<T, ecobot_status_tempFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ecobot_status_tempClient<$Result.GetResult<Prisma.$ecobot_status_tempPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ecobot_status_temp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecobot_status_tempFindFirstArgs} args - Arguments to find a Ecobot_status_temp
     * @example
     * // Get one Ecobot_status_temp
     * const ecobot_status_temp = await prisma.ecobot_status_temp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ecobot_status_tempFindFirstArgs>(args?: SelectSubset<T, ecobot_status_tempFindFirstArgs<ExtArgs>>): Prisma__ecobot_status_tempClient<$Result.GetResult<Prisma.$ecobot_status_tempPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ecobot_status_temp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecobot_status_tempFindFirstOrThrowArgs} args - Arguments to find a Ecobot_status_temp
     * @example
     * // Get one Ecobot_status_temp
     * const ecobot_status_temp = await prisma.ecobot_status_temp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ecobot_status_tempFindFirstOrThrowArgs>(args?: SelectSubset<T, ecobot_status_tempFindFirstOrThrowArgs<ExtArgs>>): Prisma__ecobot_status_tempClient<$Result.GetResult<Prisma.$ecobot_status_tempPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ecobot_status_temps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecobot_status_tempFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ecobot_status_temps
     * const ecobot_status_temps = await prisma.ecobot_status_temp.findMany()
     * 
     * // Get first 10 Ecobot_status_temps
     * const ecobot_status_temps = await prisma.ecobot_status_temp.findMany({ take: 10 })
     * 
     * // Only select the `timestamp`
     * const ecobot_status_tempWithTimestampOnly = await prisma.ecobot_status_temp.findMany({ select: { timestamp: true } })
     * 
     */
    findMany<T extends ecobot_status_tempFindManyArgs>(args?: SelectSubset<T, ecobot_status_tempFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ecobot_status_tempPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ecobot_status_temp.
     * @param {ecobot_status_tempCreateArgs} args - Arguments to create a Ecobot_status_temp.
     * @example
     * // Create one Ecobot_status_temp
     * const Ecobot_status_temp = await prisma.ecobot_status_temp.create({
     *   data: {
     *     // ... data to create a Ecobot_status_temp
     *   }
     * })
     * 
     */
    create<T extends ecobot_status_tempCreateArgs>(args: SelectSubset<T, ecobot_status_tempCreateArgs<ExtArgs>>): Prisma__ecobot_status_tempClient<$Result.GetResult<Prisma.$ecobot_status_tempPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ecobot_status_temps.
     * @param {ecobot_status_tempCreateManyArgs} args - Arguments to create many Ecobot_status_temps.
     * @example
     * // Create many Ecobot_status_temps
     * const ecobot_status_temp = await prisma.ecobot_status_temp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ecobot_status_tempCreateManyArgs>(args?: SelectSubset<T, ecobot_status_tempCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ecobot_status_temps and returns the data saved in the database.
     * @param {ecobot_status_tempCreateManyAndReturnArgs} args - Arguments to create many Ecobot_status_temps.
     * @example
     * // Create many Ecobot_status_temps
     * const ecobot_status_temp = await prisma.ecobot_status_temp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ecobot_status_temps and only return the `timestamp`
     * const ecobot_status_tempWithTimestampOnly = await prisma.ecobot_status_temp.createManyAndReturn({ 
     *   select: { timestamp: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ecobot_status_tempCreateManyAndReturnArgs>(args?: SelectSubset<T, ecobot_status_tempCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ecobot_status_tempPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ecobot_status_temp.
     * @param {ecobot_status_tempDeleteArgs} args - Arguments to delete one Ecobot_status_temp.
     * @example
     * // Delete one Ecobot_status_temp
     * const Ecobot_status_temp = await prisma.ecobot_status_temp.delete({
     *   where: {
     *     // ... filter to delete one Ecobot_status_temp
     *   }
     * })
     * 
     */
    delete<T extends ecobot_status_tempDeleteArgs>(args: SelectSubset<T, ecobot_status_tempDeleteArgs<ExtArgs>>): Prisma__ecobot_status_tempClient<$Result.GetResult<Prisma.$ecobot_status_tempPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ecobot_status_temp.
     * @param {ecobot_status_tempUpdateArgs} args - Arguments to update one Ecobot_status_temp.
     * @example
     * // Update one Ecobot_status_temp
     * const ecobot_status_temp = await prisma.ecobot_status_temp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ecobot_status_tempUpdateArgs>(args: SelectSubset<T, ecobot_status_tempUpdateArgs<ExtArgs>>): Prisma__ecobot_status_tempClient<$Result.GetResult<Prisma.$ecobot_status_tempPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ecobot_status_temps.
     * @param {ecobot_status_tempDeleteManyArgs} args - Arguments to filter Ecobot_status_temps to delete.
     * @example
     * // Delete a few Ecobot_status_temps
     * const { count } = await prisma.ecobot_status_temp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ecobot_status_tempDeleteManyArgs>(args?: SelectSubset<T, ecobot_status_tempDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ecobot_status_temps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecobot_status_tempUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ecobot_status_temps
     * const ecobot_status_temp = await prisma.ecobot_status_temp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ecobot_status_tempUpdateManyArgs>(args: SelectSubset<T, ecobot_status_tempUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ecobot_status_temp.
     * @param {ecobot_status_tempUpsertArgs} args - Arguments to update or create a Ecobot_status_temp.
     * @example
     * // Update or create a Ecobot_status_temp
     * const ecobot_status_temp = await prisma.ecobot_status_temp.upsert({
     *   create: {
     *     // ... data to create a Ecobot_status_temp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ecobot_status_temp we want to update
     *   }
     * })
     */
    upsert<T extends ecobot_status_tempUpsertArgs>(args: SelectSubset<T, ecobot_status_tempUpsertArgs<ExtArgs>>): Prisma__ecobot_status_tempClient<$Result.GetResult<Prisma.$ecobot_status_tempPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ecobot_status_temps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecobot_status_tempCountArgs} args - Arguments to filter Ecobot_status_temps to count.
     * @example
     * // Count the number of Ecobot_status_temps
     * const count = await prisma.ecobot_status_temp.count({
     *   where: {
     *     // ... the filter for the Ecobot_status_temps we want to count
     *   }
     * })
    **/
    count<T extends ecobot_status_tempCountArgs>(
      args?: Subset<T, ecobot_status_tempCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ecobot_status_tempCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ecobot_status_temp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ecobot_status_tempAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ecobot_status_tempAggregateArgs>(args: Subset<T, Ecobot_status_tempAggregateArgs>): Prisma.PrismaPromise<GetEcobot_status_tempAggregateType<T>>

    /**
     * Group by Ecobot_status_temp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecobot_status_tempGroupByArgs} args - Group by arguments.
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
      T extends ecobot_status_tempGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ecobot_status_tempGroupByArgs['orderBy'] }
        : { orderBy?: ecobot_status_tempGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ecobot_status_tempGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEcobot_status_tempGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ecobot_status_temp model
   */
  readonly fields: ecobot_status_tempFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ecobot_status_temp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ecobot_status_tempClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ecobot_status_temp model
   */ 
  interface ecobot_status_tempFieldRefs {
    readonly timestamp: FieldRef<"ecobot_status_temp", 'DateTime'>
    readonly latitude: FieldRef<"ecobot_status_temp", 'Float'>
    readonly longitude: FieldRef<"ecobot_status_temp", 'Float'>
    readonly yaw: FieldRef<"ecobot_status_temp", 'Float'>
    readonly current_angular_vel: FieldRef<"ecobot_status_temp", 'Float'>
    readonly bearing: FieldRef<"ecobot_status_temp", 'Float'>
    readonly distance: FieldRef<"ecobot_status_temp", 'Float'>
    readonly course_goal_distance_threshold: FieldRef<"ecobot_status_temp", 'Float'>
    readonly holding_goal_distance_threshold: FieldRef<"ecobot_status_temp", 'Float'>
    readonly course_min_velocity: FieldRef<"ecobot_status_temp", 'Float'>
    readonly holding_min_velocity: FieldRef<"ecobot_status_temp", 'Float'>
    readonly course_min_ang_velocity: FieldRef<"ecobot_status_temp", 'Float'>
    readonly holding_min_ang_velocity: FieldRef<"ecobot_status_temp", 'Float'>
    readonly bearing_diff: FieldRef<"ecobot_status_temp", 'Float'>
    readonly depth_data: FieldRef<"ecobot_status_temp", 'Float'>
    readonly velocity: FieldRef<"ecobot_status_temp", 'Float'>
    readonly velocity_direction: FieldRef<"ecobot_status_temp", 'Float'>
    readonly current_state: FieldRef<"ecobot_status_temp", 'Int'>
    readonly current_course_state: FieldRef<"ecobot_status_temp", 'Int'>
    readonly plc_status: FieldRef<"ecobot_status_temp", 'Int'>
    readonly motor_values: FieldRef<"ecobot_status_temp", 'Int[]'>
    readonly pump_values: FieldRef<"ecobot_status_temp", 'Int[]'>
    readonly ctr_pv_v: FieldRef<"ecobot_status_temp", 'Float'>
    readonly ctr_pv_c: FieldRef<"ecobot_status_temp", 'Float'>
    readonly ctr_bat_temp: FieldRef<"ecobot_status_temp", 'Float'>
    readonly ctr_device_temp: FieldRef<"ecobot_status_temp", 'Float'>
    readonly ctr_bat_soc: FieldRef<"ecobot_status_temp", 'Float'>
    readonly ctr_bat_max_v_today: FieldRef<"ecobot_status_temp", 'Float'>
    readonly ctr_bat_min_v_today: FieldRef<"ecobot_status_temp", 'Float'>
    readonly ctr_gen_energy_today: FieldRef<"ecobot_status_temp", 'Float'>
    readonly ctr_gen_energy_month: FieldRef<"ecobot_status_temp", 'Float'>
    readonly ctr_gen_energy_year: FieldRef<"ecobot_status_temp", 'Float'>
    readonly ctr_gen_energy_total: FieldRef<"ecobot_status_temp", 'Float'>
    readonly ctr_bat_v: FieldRef<"ecobot_status_temp", 'Float'>
    readonly ctr_bat_c: FieldRef<"ecobot_status_temp", 'Float'>
    readonly ctr_device_status: FieldRef<"ecobot_status_temp", 'Int'>
    readonly ctr_bat_status: FieldRef<"ecobot_status_temp", 'Int'>
    readonly ctr_bat_temp_status: FieldRef<"ecobot_status_temp", 'Int'>
    readonly ctr_solar_status: FieldRef<"ecobot_status_temp", 'Int'>
    readonly ctr_charging_status: FieldRef<"ecobot_status_temp", 'Int'>
    readonly other_values: FieldRef<"ecobot_status_temp", 'Int[]'>
    readonly current_speeds: FieldRef<"ecobot_status_temp", 'Int[]'>
    readonly robot_id: FieldRef<"ecobot_status_temp", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ecobot_status_temp findUnique
   */
  export type ecobot_status_tempFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_status_temp
     */
    select?: ecobot_status_tempSelect<ExtArgs> | null
    /**
     * Filter, which ecobot_status_temp to fetch.
     */
    where: ecobot_status_tempWhereUniqueInput
  }

  /**
   * ecobot_status_temp findUniqueOrThrow
   */
  export type ecobot_status_tempFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_status_temp
     */
    select?: ecobot_status_tempSelect<ExtArgs> | null
    /**
     * Filter, which ecobot_status_temp to fetch.
     */
    where: ecobot_status_tempWhereUniqueInput
  }

  /**
   * ecobot_status_temp findFirst
   */
  export type ecobot_status_tempFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_status_temp
     */
    select?: ecobot_status_tempSelect<ExtArgs> | null
    /**
     * Filter, which ecobot_status_temp to fetch.
     */
    where?: ecobot_status_tempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ecobot_status_temps to fetch.
     */
    orderBy?: ecobot_status_tempOrderByWithRelationInput | ecobot_status_tempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ecobot_status_temps.
     */
    cursor?: ecobot_status_tempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ecobot_status_temps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ecobot_status_temps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ecobot_status_temps.
     */
    distinct?: Ecobot_status_tempScalarFieldEnum | Ecobot_status_tempScalarFieldEnum[]
  }

  /**
   * ecobot_status_temp findFirstOrThrow
   */
  export type ecobot_status_tempFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_status_temp
     */
    select?: ecobot_status_tempSelect<ExtArgs> | null
    /**
     * Filter, which ecobot_status_temp to fetch.
     */
    where?: ecobot_status_tempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ecobot_status_temps to fetch.
     */
    orderBy?: ecobot_status_tempOrderByWithRelationInput | ecobot_status_tempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ecobot_status_temps.
     */
    cursor?: ecobot_status_tempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ecobot_status_temps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ecobot_status_temps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ecobot_status_temps.
     */
    distinct?: Ecobot_status_tempScalarFieldEnum | Ecobot_status_tempScalarFieldEnum[]
  }

  /**
   * ecobot_status_temp findMany
   */
  export type ecobot_status_tempFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_status_temp
     */
    select?: ecobot_status_tempSelect<ExtArgs> | null
    /**
     * Filter, which ecobot_status_temps to fetch.
     */
    where?: ecobot_status_tempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ecobot_status_temps to fetch.
     */
    orderBy?: ecobot_status_tempOrderByWithRelationInput | ecobot_status_tempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ecobot_status_temps.
     */
    cursor?: ecobot_status_tempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ecobot_status_temps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ecobot_status_temps.
     */
    skip?: number
    distinct?: Ecobot_status_tempScalarFieldEnum | Ecobot_status_tempScalarFieldEnum[]
  }

  /**
   * ecobot_status_temp create
   */
  export type ecobot_status_tempCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_status_temp
     */
    select?: ecobot_status_tempSelect<ExtArgs> | null
    /**
     * The data needed to create a ecobot_status_temp.
     */
    data: XOR<ecobot_status_tempCreateInput, ecobot_status_tempUncheckedCreateInput>
  }

  /**
   * ecobot_status_temp createMany
   */
  export type ecobot_status_tempCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ecobot_status_temps.
     */
    data: ecobot_status_tempCreateManyInput | ecobot_status_tempCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ecobot_status_temp createManyAndReturn
   */
  export type ecobot_status_tempCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_status_temp
     */
    select?: ecobot_status_tempSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ecobot_status_temps.
     */
    data: ecobot_status_tempCreateManyInput | ecobot_status_tempCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ecobot_status_temp update
   */
  export type ecobot_status_tempUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_status_temp
     */
    select?: ecobot_status_tempSelect<ExtArgs> | null
    /**
     * The data needed to update a ecobot_status_temp.
     */
    data: XOR<ecobot_status_tempUpdateInput, ecobot_status_tempUncheckedUpdateInput>
    /**
     * Choose, which ecobot_status_temp to update.
     */
    where: ecobot_status_tempWhereUniqueInput
  }

  /**
   * ecobot_status_temp updateMany
   */
  export type ecobot_status_tempUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ecobot_status_temps.
     */
    data: XOR<ecobot_status_tempUpdateManyMutationInput, ecobot_status_tempUncheckedUpdateManyInput>
    /**
     * Filter which ecobot_status_temps to update
     */
    where?: ecobot_status_tempWhereInput
  }

  /**
   * ecobot_status_temp upsert
   */
  export type ecobot_status_tempUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_status_temp
     */
    select?: ecobot_status_tempSelect<ExtArgs> | null
    /**
     * The filter to search for the ecobot_status_temp to update in case it exists.
     */
    where: ecobot_status_tempWhereUniqueInput
    /**
     * In case the ecobot_status_temp found by the `where` argument doesn't exist, create a new ecobot_status_temp with this data.
     */
    create: XOR<ecobot_status_tempCreateInput, ecobot_status_tempUncheckedCreateInput>
    /**
     * In case the ecobot_status_temp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ecobot_status_tempUpdateInput, ecobot_status_tempUncheckedUpdateInput>
  }

  /**
   * ecobot_status_temp delete
   */
  export type ecobot_status_tempDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_status_temp
     */
    select?: ecobot_status_tempSelect<ExtArgs> | null
    /**
     * Filter which ecobot_status_temp to delete.
     */
    where: ecobot_status_tempWhereUniqueInput
  }

  /**
   * ecobot_status_temp deleteMany
   */
  export type ecobot_status_tempDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ecobot_status_temps to delete
     */
    where?: ecobot_status_tempWhereInput
  }

  /**
   * ecobot_status_temp without action
   */
  export type ecobot_status_tempDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_status_temp
     */
    select?: ecobot_status_tempSelect<ExtArgs> | null
  }


  /**
   * Model ecobot_ts_info
   */

  export type AggregateEcobot_ts_info = {
    _count: Ecobot_ts_infoCountAggregateOutputType | null
    _avg: Ecobot_ts_infoAvgAggregateOutputType | null
    _sum: Ecobot_ts_infoSumAggregateOutputType | null
    _min: Ecobot_ts_infoMinAggregateOutputType | null
    _max: Ecobot_ts_infoMaxAggregateOutputType | null
  }

  export type Ecobot_ts_infoAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    plc_status: number | null
    ctr_pv_v: number | null
    ctr_pv_c: number | null
    ctr_bat_soc: number | null
    ctr_bat_max_v_today: number | null
    ctr_bat_min_v_today: number | null
    ctr_gen_energy_today: number | null
    ctr_gen_energy_month: number | null
    ctr_gen_energy_year: number | null
    ctr_gen_energy_total: number | null
    ctr_bat_v: number | null
    ctr_bat_c: number | null
    ctr_device_status: number | null
    ctr_bat_status: number | null
    ctr_bat_temp_status: number | null
    ctr_solar_status: number | null
    ctr_charging_status: number | null
  }

  export type Ecobot_ts_infoSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    plc_status: number | null
    ctr_pv_v: number | null
    ctr_pv_c: number | null
    ctr_bat_soc: number | null
    ctr_bat_max_v_today: number | null
    ctr_bat_min_v_today: number | null
    ctr_gen_energy_today: number | null
    ctr_gen_energy_month: number | null
    ctr_gen_energy_year: number | null
    ctr_gen_energy_total: number | null
    ctr_bat_v: number | null
    ctr_bat_c: number | null
    ctr_device_status: number | null
    ctr_bat_status: number | null
    ctr_bat_temp_status: number | null
    ctr_solar_status: number | null
    ctr_charging_status: number | null
  }

  export type Ecobot_ts_infoMinAggregateOutputType = {
    timestamp: Date | null
    latitude: number | null
    longitude: number | null
    plc_status: number | null
    ctr_pv_v: number | null
    ctr_pv_c: number | null
    ctr_bat_soc: number | null
    ctr_bat_max_v_today: number | null
    ctr_bat_min_v_today: number | null
    ctr_gen_energy_today: number | null
    ctr_gen_energy_month: number | null
    ctr_gen_energy_year: number | null
    ctr_gen_energy_total: number | null
    ctr_bat_v: number | null
    ctr_bat_c: number | null
    ctr_device_status: number | null
    ctr_bat_status: number | null
    ctr_bat_temp_status: number | null
    ctr_solar_status: number | null
    ctr_charging_status: number | null
    robot_id: string | null
  }

  export type Ecobot_ts_infoMaxAggregateOutputType = {
    timestamp: Date | null
    latitude: number | null
    longitude: number | null
    plc_status: number | null
    ctr_pv_v: number | null
    ctr_pv_c: number | null
    ctr_bat_soc: number | null
    ctr_bat_max_v_today: number | null
    ctr_bat_min_v_today: number | null
    ctr_gen_energy_today: number | null
    ctr_gen_energy_month: number | null
    ctr_gen_energy_year: number | null
    ctr_gen_energy_total: number | null
    ctr_bat_v: number | null
    ctr_bat_c: number | null
    ctr_device_status: number | null
    ctr_bat_status: number | null
    ctr_bat_temp_status: number | null
    ctr_solar_status: number | null
    ctr_charging_status: number | null
    robot_id: string | null
  }

  export type Ecobot_ts_infoCountAggregateOutputType = {
    timestamp: number
    latitude: number
    longitude: number
    plc_status: number
    ctr_pv_v: number
    ctr_pv_c: number
    ctr_bat_soc: number
    ctr_bat_max_v_today: number
    ctr_bat_min_v_today: number
    ctr_gen_energy_today: number
    ctr_gen_energy_month: number
    ctr_gen_energy_year: number
    ctr_gen_energy_total: number
    ctr_bat_v: number
    ctr_bat_c: number
    ctr_device_status: number
    ctr_bat_status: number
    ctr_bat_temp_status: number
    ctr_solar_status: number
    ctr_charging_status: number
    robot_id: number
    _all: number
  }


  export type Ecobot_ts_infoAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    plc_status?: true
    ctr_pv_v?: true
    ctr_pv_c?: true
    ctr_bat_soc?: true
    ctr_bat_max_v_today?: true
    ctr_bat_min_v_today?: true
    ctr_gen_energy_today?: true
    ctr_gen_energy_month?: true
    ctr_gen_energy_year?: true
    ctr_gen_energy_total?: true
    ctr_bat_v?: true
    ctr_bat_c?: true
    ctr_device_status?: true
    ctr_bat_status?: true
    ctr_bat_temp_status?: true
    ctr_solar_status?: true
    ctr_charging_status?: true
  }

  export type Ecobot_ts_infoSumAggregateInputType = {
    latitude?: true
    longitude?: true
    plc_status?: true
    ctr_pv_v?: true
    ctr_pv_c?: true
    ctr_bat_soc?: true
    ctr_bat_max_v_today?: true
    ctr_bat_min_v_today?: true
    ctr_gen_energy_today?: true
    ctr_gen_energy_month?: true
    ctr_gen_energy_year?: true
    ctr_gen_energy_total?: true
    ctr_bat_v?: true
    ctr_bat_c?: true
    ctr_device_status?: true
    ctr_bat_status?: true
    ctr_bat_temp_status?: true
    ctr_solar_status?: true
    ctr_charging_status?: true
  }

  export type Ecobot_ts_infoMinAggregateInputType = {
    timestamp?: true
    latitude?: true
    longitude?: true
    plc_status?: true
    ctr_pv_v?: true
    ctr_pv_c?: true
    ctr_bat_soc?: true
    ctr_bat_max_v_today?: true
    ctr_bat_min_v_today?: true
    ctr_gen_energy_today?: true
    ctr_gen_energy_month?: true
    ctr_gen_energy_year?: true
    ctr_gen_energy_total?: true
    ctr_bat_v?: true
    ctr_bat_c?: true
    ctr_device_status?: true
    ctr_bat_status?: true
    ctr_bat_temp_status?: true
    ctr_solar_status?: true
    ctr_charging_status?: true
    robot_id?: true
  }

  export type Ecobot_ts_infoMaxAggregateInputType = {
    timestamp?: true
    latitude?: true
    longitude?: true
    plc_status?: true
    ctr_pv_v?: true
    ctr_pv_c?: true
    ctr_bat_soc?: true
    ctr_bat_max_v_today?: true
    ctr_bat_min_v_today?: true
    ctr_gen_energy_today?: true
    ctr_gen_energy_month?: true
    ctr_gen_energy_year?: true
    ctr_gen_energy_total?: true
    ctr_bat_v?: true
    ctr_bat_c?: true
    ctr_device_status?: true
    ctr_bat_status?: true
    ctr_bat_temp_status?: true
    ctr_solar_status?: true
    ctr_charging_status?: true
    robot_id?: true
  }

  export type Ecobot_ts_infoCountAggregateInputType = {
    timestamp?: true
    latitude?: true
    longitude?: true
    plc_status?: true
    ctr_pv_v?: true
    ctr_pv_c?: true
    ctr_bat_soc?: true
    ctr_bat_max_v_today?: true
    ctr_bat_min_v_today?: true
    ctr_gen_energy_today?: true
    ctr_gen_energy_month?: true
    ctr_gen_energy_year?: true
    ctr_gen_energy_total?: true
    ctr_bat_v?: true
    ctr_bat_c?: true
    ctr_device_status?: true
    ctr_bat_status?: true
    ctr_bat_temp_status?: true
    ctr_solar_status?: true
    ctr_charging_status?: true
    robot_id?: true
    _all?: true
  }

  export type Ecobot_ts_infoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ecobot_ts_info to aggregate.
     */
    where?: ecobot_ts_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ecobot_ts_infos to fetch.
     */
    orderBy?: ecobot_ts_infoOrderByWithRelationInput | ecobot_ts_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ecobot_ts_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ecobot_ts_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ecobot_ts_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ecobot_ts_infos
    **/
    _count?: true | Ecobot_ts_infoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ecobot_ts_infoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ecobot_ts_infoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ecobot_ts_infoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ecobot_ts_infoMaxAggregateInputType
  }

  export type GetEcobot_ts_infoAggregateType<T extends Ecobot_ts_infoAggregateArgs> = {
        [P in keyof T & keyof AggregateEcobot_ts_info]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEcobot_ts_info[P]>
      : GetScalarType<T[P], AggregateEcobot_ts_info[P]>
  }




  export type ecobot_ts_infoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ecobot_ts_infoWhereInput
    orderBy?: ecobot_ts_infoOrderByWithAggregationInput | ecobot_ts_infoOrderByWithAggregationInput[]
    by: Ecobot_ts_infoScalarFieldEnum[] | Ecobot_ts_infoScalarFieldEnum
    having?: ecobot_ts_infoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ecobot_ts_infoCountAggregateInputType | true
    _avg?: Ecobot_ts_infoAvgAggregateInputType
    _sum?: Ecobot_ts_infoSumAggregateInputType
    _min?: Ecobot_ts_infoMinAggregateInputType
    _max?: Ecobot_ts_infoMaxAggregateInputType
  }

  export type Ecobot_ts_infoGroupByOutputType = {
    timestamp: Date
    latitude: number
    longitude: number
    plc_status: number | null
    ctr_pv_v: number | null
    ctr_pv_c: number | null
    ctr_bat_soc: number | null
    ctr_bat_max_v_today: number | null
    ctr_bat_min_v_today: number | null
    ctr_gen_energy_today: number | null
    ctr_gen_energy_month: number | null
    ctr_gen_energy_year: number | null
    ctr_gen_energy_total: number | null
    ctr_bat_v: number | null
    ctr_bat_c: number | null
    ctr_device_status: number | null
    ctr_bat_status: number | null
    ctr_bat_temp_status: number | null
    ctr_solar_status: number | null
    ctr_charging_status: number | null
    robot_id: string
    _count: Ecobot_ts_infoCountAggregateOutputType | null
    _avg: Ecobot_ts_infoAvgAggregateOutputType | null
    _sum: Ecobot_ts_infoSumAggregateOutputType | null
    _min: Ecobot_ts_infoMinAggregateOutputType | null
    _max: Ecobot_ts_infoMaxAggregateOutputType | null
  }

  type GetEcobot_ts_infoGroupByPayload<T extends ecobot_ts_infoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ecobot_ts_infoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ecobot_ts_infoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ecobot_ts_infoGroupByOutputType[P]>
            : GetScalarType<T[P], Ecobot_ts_infoGroupByOutputType[P]>
        }
      >
    >


  export type ecobot_ts_infoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timestamp?: boolean
    latitude?: boolean
    longitude?: boolean
    plc_status?: boolean
    ctr_pv_v?: boolean
    ctr_pv_c?: boolean
    ctr_bat_soc?: boolean
    ctr_bat_max_v_today?: boolean
    ctr_bat_min_v_today?: boolean
    ctr_gen_energy_today?: boolean
    ctr_gen_energy_month?: boolean
    ctr_gen_energy_year?: boolean
    ctr_gen_energy_total?: boolean
    ctr_bat_v?: boolean
    ctr_bat_c?: boolean
    ctr_device_status?: boolean
    ctr_bat_status?: boolean
    ctr_bat_temp_status?: boolean
    ctr_solar_status?: boolean
    ctr_charging_status?: boolean
    robot_id?: boolean
  }, ExtArgs["result"]["ecobot_ts_info"]>

  export type ecobot_ts_infoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timestamp?: boolean
    latitude?: boolean
    longitude?: boolean
    plc_status?: boolean
    ctr_pv_v?: boolean
    ctr_pv_c?: boolean
    ctr_bat_soc?: boolean
    ctr_bat_max_v_today?: boolean
    ctr_bat_min_v_today?: boolean
    ctr_gen_energy_today?: boolean
    ctr_gen_energy_month?: boolean
    ctr_gen_energy_year?: boolean
    ctr_gen_energy_total?: boolean
    ctr_bat_v?: boolean
    ctr_bat_c?: boolean
    ctr_device_status?: boolean
    ctr_bat_status?: boolean
    ctr_bat_temp_status?: boolean
    ctr_solar_status?: boolean
    ctr_charging_status?: boolean
    robot_id?: boolean
  }, ExtArgs["result"]["ecobot_ts_info"]>

  export type ecobot_ts_infoSelectScalar = {
    timestamp?: boolean
    latitude?: boolean
    longitude?: boolean
    plc_status?: boolean
    ctr_pv_v?: boolean
    ctr_pv_c?: boolean
    ctr_bat_soc?: boolean
    ctr_bat_max_v_today?: boolean
    ctr_bat_min_v_today?: boolean
    ctr_gen_energy_today?: boolean
    ctr_gen_energy_month?: boolean
    ctr_gen_energy_year?: boolean
    ctr_gen_energy_total?: boolean
    ctr_bat_v?: boolean
    ctr_bat_c?: boolean
    ctr_device_status?: boolean
    ctr_bat_status?: boolean
    ctr_bat_temp_status?: boolean
    ctr_solar_status?: boolean
    ctr_charging_status?: boolean
    robot_id?: boolean
  }


  export type $ecobot_ts_infoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ecobot_ts_info"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      timestamp: Date
      latitude: number
      longitude: number
      plc_status: number | null
      ctr_pv_v: number | null
      ctr_pv_c: number | null
      ctr_bat_soc: number | null
      ctr_bat_max_v_today: number | null
      ctr_bat_min_v_today: number | null
      ctr_gen_energy_today: number | null
      ctr_gen_energy_month: number | null
      ctr_gen_energy_year: number | null
      ctr_gen_energy_total: number | null
      ctr_bat_v: number | null
      ctr_bat_c: number | null
      ctr_device_status: number | null
      ctr_bat_status: number | null
      ctr_bat_temp_status: number | null
      ctr_solar_status: number | null
      ctr_charging_status: number | null
      robot_id: string
    }, ExtArgs["result"]["ecobot_ts_info"]>
    composites: {}
  }

  type ecobot_ts_infoGetPayload<S extends boolean | null | undefined | ecobot_ts_infoDefaultArgs> = $Result.GetResult<Prisma.$ecobot_ts_infoPayload, S>

  type ecobot_ts_infoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ecobot_ts_infoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Ecobot_ts_infoCountAggregateInputType | true
    }

  export interface ecobot_ts_infoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ecobot_ts_info'], meta: { name: 'ecobot_ts_info' } }
    /**
     * Find zero or one Ecobot_ts_info that matches the filter.
     * @param {ecobot_ts_infoFindUniqueArgs} args - Arguments to find a Ecobot_ts_info
     * @example
     * // Get one Ecobot_ts_info
     * const ecobot_ts_info = await prisma.ecobot_ts_info.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ecobot_ts_infoFindUniqueArgs>(args: SelectSubset<T, ecobot_ts_infoFindUniqueArgs<ExtArgs>>): Prisma__ecobot_ts_infoClient<$Result.GetResult<Prisma.$ecobot_ts_infoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ecobot_ts_info that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ecobot_ts_infoFindUniqueOrThrowArgs} args - Arguments to find a Ecobot_ts_info
     * @example
     * // Get one Ecobot_ts_info
     * const ecobot_ts_info = await prisma.ecobot_ts_info.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ecobot_ts_infoFindUniqueOrThrowArgs>(args: SelectSubset<T, ecobot_ts_infoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ecobot_ts_infoClient<$Result.GetResult<Prisma.$ecobot_ts_infoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ecobot_ts_info that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecobot_ts_infoFindFirstArgs} args - Arguments to find a Ecobot_ts_info
     * @example
     * // Get one Ecobot_ts_info
     * const ecobot_ts_info = await prisma.ecobot_ts_info.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ecobot_ts_infoFindFirstArgs>(args?: SelectSubset<T, ecobot_ts_infoFindFirstArgs<ExtArgs>>): Prisma__ecobot_ts_infoClient<$Result.GetResult<Prisma.$ecobot_ts_infoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ecobot_ts_info that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecobot_ts_infoFindFirstOrThrowArgs} args - Arguments to find a Ecobot_ts_info
     * @example
     * // Get one Ecobot_ts_info
     * const ecobot_ts_info = await prisma.ecobot_ts_info.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ecobot_ts_infoFindFirstOrThrowArgs>(args?: SelectSubset<T, ecobot_ts_infoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ecobot_ts_infoClient<$Result.GetResult<Prisma.$ecobot_ts_infoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ecobot_ts_infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecobot_ts_infoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ecobot_ts_infos
     * const ecobot_ts_infos = await prisma.ecobot_ts_info.findMany()
     * 
     * // Get first 10 Ecobot_ts_infos
     * const ecobot_ts_infos = await prisma.ecobot_ts_info.findMany({ take: 10 })
     * 
     * // Only select the `timestamp`
     * const ecobot_ts_infoWithTimestampOnly = await prisma.ecobot_ts_info.findMany({ select: { timestamp: true } })
     * 
     */
    findMany<T extends ecobot_ts_infoFindManyArgs>(args?: SelectSubset<T, ecobot_ts_infoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ecobot_ts_infoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ecobot_ts_info.
     * @param {ecobot_ts_infoCreateArgs} args - Arguments to create a Ecobot_ts_info.
     * @example
     * // Create one Ecobot_ts_info
     * const Ecobot_ts_info = await prisma.ecobot_ts_info.create({
     *   data: {
     *     // ... data to create a Ecobot_ts_info
     *   }
     * })
     * 
     */
    create<T extends ecobot_ts_infoCreateArgs>(args: SelectSubset<T, ecobot_ts_infoCreateArgs<ExtArgs>>): Prisma__ecobot_ts_infoClient<$Result.GetResult<Prisma.$ecobot_ts_infoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ecobot_ts_infos.
     * @param {ecobot_ts_infoCreateManyArgs} args - Arguments to create many Ecobot_ts_infos.
     * @example
     * // Create many Ecobot_ts_infos
     * const ecobot_ts_info = await prisma.ecobot_ts_info.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ecobot_ts_infoCreateManyArgs>(args?: SelectSubset<T, ecobot_ts_infoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ecobot_ts_infos and returns the data saved in the database.
     * @param {ecobot_ts_infoCreateManyAndReturnArgs} args - Arguments to create many Ecobot_ts_infos.
     * @example
     * // Create many Ecobot_ts_infos
     * const ecobot_ts_info = await prisma.ecobot_ts_info.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ecobot_ts_infos and only return the `timestamp`
     * const ecobot_ts_infoWithTimestampOnly = await prisma.ecobot_ts_info.createManyAndReturn({ 
     *   select: { timestamp: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ecobot_ts_infoCreateManyAndReturnArgs>(args?: SelectSubset<T, ecobot_ts_infoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ecobot_ts_infoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ecobot_ts_info.
     * @param {ecobot_ts_infoDeleteArgs} args - Arguments to delete one Ecobot_ts_info.
     * @example
     * // Delete one Ecobot_ts_info
     * const Ecobot_ts_info = await prisma.ecobot_ts_info.delete({
     *   where: {
     *     // ... filter to delete one Ecobot_ts_info
     *   }
     * })
     * 
     */
    delete<T extends ecobot_ts_infoDeleteArgs>(args: SelectSubset<T, ecobot_ts_infoDeleteArgs<ExtArgs>>): Prisma__ecobot_ts_infoClient<$Result.GetResult<Prisma.$ecobot_ts_infoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ecobot_ts_info.
     * @param {ecobot_ts_infoUpdateArgs} args - Arguments to update one Ecobot_ts_info.
     * @example
     * // Update one Ecobot_ts_info
     * const ecobot_ts_info = await prisma.ecobot_ts_info.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ecobot_ts_infoUpdateArgs>(args: SelectSubset<T, ecobot_ts_infoUpdateArgs<ExtArgs>>): Prisma__ecobot_ts_infoClient<$Result.GetResult<Prisma.$ecobot_ts_infoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ecobot_ts_infos.
     * @param {ecobot_ts_infoDeleteManyArgs} args - Arguments to filter Ecobot_ts_infos to delete.
     * @example
     * // Delete a few Ecobot_ts_infos
     * const { count } = await prisma.ecobot_ts_info.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ecobot_ts_infoDeleteManyArgs>(args?: SelectSubset<T, ecobot_ts_infoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ecobot_ts_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecobot_ts_infoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ecobot_ts_infos
     * const ecobot_ts_info = await prisma.ecobot_ts_info.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ecobot_ts_infoUpdateManyArgs>(args: SelectSubset<T, ecobot_ts_infoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ecobot_ts_info.
     * @param {ecobot_ts_infoUpsertArgs} args - Arguments to update or create a Ecobot_ts_info.
     * @example
     * // Update or create a Ecobot_ts_info
     * const ecobot_ts_info = await prisma.ecobot_ts_info.upsert({
     *   create: {
     *     // ... data to create a Ecobot_ts_info
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ecobot_ts_info we want to update
     *   }
     * })
     */
    upsert<T extends ecobot_ts_infoUpsertArgs>(args: SelectSubset<T, ecobot_ts_infoUpsertArgs<ExtArgs>>): Prisma__ecobot_ts_infoClient<$Result.GetResult<Prisma.$ecobot_ts_infoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ecobot_ts_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecobot_ts_infoCountArgs} args - Arguments to filter Ecobot_ts_infos to count.
     * @example
     * // Count the number of Ecobot_ts_infos
     * const count = await prisma.ecobot_ts_info.count({
     *   where: {
     *     // ... the filter for the Ecobot_ts_infos we want to count
     *   }
     * })
    **/
    count<T extends ecobot_ts_infoCountArgs>(
      args?: Subset<T, ecobot_ts_infoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ecobot_ts_infoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ecobot_ts_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ecobot_ts_infoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ecobot_ts_infoAggregateArgs>(args: Subset<T, Ecobot_ts_infoAggregateArgs>): Prisma.PrismaPromise<GetEcobot_ts_infoAggregateType<T>>

    /**
     * Group by Ecobot_ts_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecobot_ts_infoGroupByArgs} args - Group by arguments.
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
      T extends ecobot_ts_infoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ecobot_ts_infoGroupByArgs['orderBy'] }
        : { orderBy?: ecobot_ts_infoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ecobot_ts_infoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEcobot_ts_infoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ecobot_ts_info model
   */
  readonly fields: ecobot_ts_infoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ecobot_ts_info.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ecobot_ts_infoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ecobot_ts_info model
   */ 
  interface ecobot_ts_infoFieldRefs {
    readonly timestamp: FieldRef<"ecobot_ts_info", 'DateTime'>
    readonly latitude: FieldRef<"ecobot_ts_info", 'Float'>
    readonly longitude: FieldRef<"ecobot_ts_info", 'Float'>
    readonly plc_status: FieldRef<"ecobot_ts_info", 'Int'>
    readonly ctr_pv_v: FieldRef<"ecobot_ts_info", 'Float'>
    readonly ctr_pv_c: FieldRef<"ecobot_ts_info", 'Float'>
    readonly ctr_bat_soc: FieldRef<"ecobot_ts_info", 'Float'>
    readonly ctr_bat_max_v_today: FieldRef<"ecobot_ts_info", 'Float'>
    readonly ctr_bat_min_v_today: FieldRef<"ecobot_ts_info", 'Float'>
    readonly ctr_gen_energy_today: FieldRef<"ecobot_ts_info", 'Float'>
    readonly ctr_gen_energy_month: FieldRef<"ecobot_ts_info", 'Float'>
    readonly ctr_gen_energy_year: FieldRef<"ecobot_ts_info", 'Float'>
    readonly ctr_gen_energy_total: FieldRef<"ecobot_ts_info", 'Float'>
    readonly ctr_bat_v: FieldRef<"ecobot_ts_info", 'Float'>
    readonly ctr_bat_c: FieldRef<"ecobot_ts_info", 'Float'>
    readonly ctr_device_status: FieldRef<"ecobot_ts_info", 'Int'>
    readonly ctr_bat_status: FieldRef<"ecobot_ts_info", 'Int'>
    readonly ctr_bat_temp_status: FieldRef<"ecobot_ts_info", 'Int'>
    readonly ctr_solar_status: FieldRef<"ecobot_ts_info", 'Int'>
    readonly ctr_charging_status: FieldRef<"ecobot_ts_info", 'Int'>
    readonly robot_id: FieldRef<"ecobot_ts_info", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ecobot_ts_info findUnique
   */
  export type ecobot_ts_infoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_ts_info
     */
    select?: ecobot_ts_infoSelect<ExtArgs> | null
    /**
     * Filter, which ecobot_ts_info to fetch.
     */
    where: ecobot_ts_infoWhereUniqueInput
  }

  /**
   * ecobot_ts_info findUniqueOrThrow
   */
  export type ecobot_ts_infoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_ts_info
     */
    select?: ecobot_ts_infoSelect<ExtArgs> | null
    /**
     * Filter, which ecobot_ts_info to fetch.
     */
    where: ecobot_ts_infoWhereUniqueInput
  }

  /**
   * ecobot_ts_info findFirst
   */
  export type ecobot_ts_infoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_ts_info
     */
    select?: ecobot_ts_infoSelect<ExtArgs> | null
    /**
     * Filter, which ecobot_ts_info to fetch.
     */
    where?: ecobot_ts_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ecobot_ts_infos to fetch.
     */
    orderBy?: ecobot_ts_infoOrderByWithRelationInput | ecobot_ts_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ecobot_ts_infos.
     */
    cursor?: ecobot_ts_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ecobot_ts_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ecobot_ts_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ecobot_ts_infos.
     */
    distinct?: Ecobot_ts_infoScalarFieldEnum | Ecobot_ts_infoScalarFieldEnum[]
  }

  /**
   * ecobot_ts_info findFirstOrThrow
   */
  export type ecobot_ts_infoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_ts_info
     */
    select?: ecobot_ts_infoSelect<ExtArgs> | null
    /**
     * Filter, which ecobot_ts_info to fetch.
     */
    where?: ecobot_ts_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ecobot_ts_infos to fetch.
     */
    orderBy?: ecobot_ts_infoOrderByWithRelationInput | ecobot_ts_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ecobot_ts_infos.
     */
    cursor?: ecobot_ts_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ecobot_ts_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ecobot_ts_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ecobot_ts_infos.
     */
    distinct?: Ecobot_ts_infoScalarFieldEnum | Ecobot_ts_infoScalarFieldEnum[]
  }

  /**
   * ecobot_ts_info findMany
   */
  export type ecobot_ts_infoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_ts_info
     */
    select?: ecobot_ts_infoSelect<ExtArgs> | null
    /**
     * Filter, which ecobot_ts_infos to fetch.
     */
    where?: ecobot_ts_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ecobot_ts_infos to fetch.
     */
    orderBy?: ecobot_ts_infoOrderByWithRelationInput | ecobot_ts_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ecobot_ts_infos.
     */
    cursor?: ecobot_ts_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ecobot_ts_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ecobot_ts_infos.
     */
    skip?: number
    distinct?: Ecobot_ts_infoScalarFieldEnum | Ecobot_ts_infoScalarFieldEnum[]
  }

  /**
   * ecobot_ts_info create
   */
  export type ecobot_ts_infoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_ts_info
     */
    select?: ecobot_ts_infoSelect<ExtArgs> | null
    /**
     * The data needed to create a ecobot_ts_info.
     */
    data: XOR<ecobot_ts_infoCreateInput, ecobot_ts_infoUncheckedCreateInput>
  }

  /**
   * ecobot_ts_info createMany
   */
  export type ecobot_ts_infoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ecobot_ts_infos.
     */
    data: ecobot_ts_infoCreateManyInput | ecobot_ts_infoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ecobot_ts_info createManyAndReturn
   */
  export type ecobot_ts_infoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_ts_info
     */
    select?: ecobot_ts_infoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ecobot_ts_infos.
     */
    data: ecobot_ts_infoCreateManyInput | ecobot_ts_infoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ecobot_ts_info update
   */
  export type ecobot_ts_infoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_ts_info
     */
    select?: ecobot_ts_infoSelect<ExtArgs> | null
    /**
     * The data needed to update a ecobot_ts_info.
     */
    data: XOR<ecobot_ts_infoUpdateInput, ecobot_ts_infoUncheckedUpdateInput>
    /**
     * Choose, which ecobot_ts_info to update.
     */
    where: ecobot_ts_infoWhereUniqueInput
  }

  /**
   * ecobot_ts_info updateMany
   */
  export type ecobot_ts_infoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ecobot_ts_infos.
     */
    data: XOR<ecobot_ts_infoUpdateManyMutationInput, ecobot_ts_infoUncheckedUpdateManyInput>
    /**
     * Filter which ecobot_ts_infos to update
     */
    where?: ecobot_ts_infoWhereInput
  }

  /**
   * ecobot_ts_info upsert
   */
  export type ecobot_ts_infoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_ts_info
     */
    select?: ecobot_ts_infoSelect<ExtArgs> | null
    /**
     * The filter to search for the ecobot_ts_info to update in case it exists.
     */
    where: ecobot_ts_infoWhereUniqueInput
    /**
     * In case the ecobot_ts_info found by the `where` argument doesn't exist, create a new ecobot_ts_info with this data.
     */
    create: XOR<ecobot_ts_infoCreateInput, ecobot_ts_infoUncheckedCreateInput>
    /**
     * In case the ecobot_ts_info was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ecobot_ts_infoUpdateInput, ecobot_ts_infoUncheckedUpdateInput>
  }

  /**
   * ecobot_ts_info delete
   */
  export type ecobot_ts_infoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_ts_info
     */
    select?: ecobot_ts_infoSelect<ExtArgs> | null
    /**
     * Filter which ecobot_ts_info to delete.
     */
    where: ecobot_ts_infoWhereUniqueInput
  }

  /**
   * ecobot_ts_info deleteMany
   */
  export type ecobot_ts_infoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ecobot_ts_infos to delete
     */
    where?: ecobot_ts_infoWhereInput
  }

  /**
   * ecobot_ts_info without action
   */
  export type ecobot_ts_infoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_ts_info
     */
    select?: ecobot_ts_infoSelect<ExtArgs> | null
  }


  /**
   * Model ecobot_ts_info_temp
   */

  export type AggregateEcobot_ts_info_temp = {
    _count: Ecobot_ts_info_tempCountAggregateOutputType | null
    _avg: Ecobot_ts_info_tempAvgAggregateOutputType | null
    _sum: Ecobot_ts_info_tempSumAggregateOutputType | null
    _min: Ecobot_ts_info_tempMinAggregateOutputType | null
    _max: Ecobot_ts_info_tempMaxAggregateOutputType | null
  }

  export type Ecobot_ts_info_tempAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    plc_status: number | null
    ctr_pv_v: number | null
    ctr_pv_c: number | null
    ctr_bat_soc: number | null
    ctr_bat_max_v_today: number | null
    ctr_bat_min_v_today: number | null
    ctr_gen_energy_today: number | null
    ctr_gen_energy_month: number | null
    ctr_gen_energy_year: number | null
    ctr_gen_energy_total: number | null
    ctr_bat_v: number | null
    ctr_bat_c: number | null
    ctr_device_status: number | null
    ctr_bat_status: number | null
    ctr_bat_temp_status: number | null
    ctr_solar_status: number | null
    ctr_charging_status: number | null
  }

  export type Ecobot_ts_info_tempSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    plc_status: number | null
    ctr_pv_v: number | null
    ctr_pv_c: number | null
    ctr_bat_soc: number | null
    ctr_bat_max_v_today: number | null
    ctr_bat_min_v_today: number | null
    ctr_gen_energy_today: number | null
    ctr_gen_energy_month: number | null
    ctr_gen_energy_year: number | null
    ctr_gen_energy_total: number | null
    ctr_bat_v: number | null
    ctr_bat_c: number | null
    ctr_device_status: number | null
    ctr_bat_status: number | null
    ctr_bat_temp_status: number | null
    ctr_solar_status: number | null
    ctr_charging_status: number | null
  }

  export type Ecobot_ts_info_tempMinAggregateOutputType = {
    timestamp: Date | null
    latitude: number | null
    longitude: number | null
    plc_status: number | null
    ctr_pv_v: number | null
    ctr_pv_c: number | null
    ctr_bat_soc: number | null
    ctr_bat_max_v_today: number | null
    ctr_bat_min_v_today: number | null
    ctr_gen_energy_today: number | null
    ctr_gen_energy_month: number | null
    ctr_gen_energy_year: number | null
    ctr_gen_energy_total: number | null
    ctr_bat_v: number | null
    ctr_bat_c: number | null
    ctr_device_status: number | null
    ctr_bat_status: number | null
    ctr_bat_temp_status: number | null
    ctr_solar_status: number | null
    ctr_charging_status: number | null
    robot_id: string | null
  }

  export type Ecobot_ts_info_tempMaxAggregateOutputType = {
    timestamp: Date | null
    latitude: number | null
    longitude: number | null
    plc_status: number | null
    ctr_pv_v: number | null
    ctr_pv_c: number | null
    ctr_bat_soc: number | null
    ctr_bat_max_v_today: number | null
    ctr_bat_min_v_today: number | null
    ctr_gen_energy_today: number | null
    ctr_gen_energy_month: number | null
    ctr_gen_energy_year: number | null
    ctr_gen_energy_total: number | null
    ctr_bat_v: number | null
    ctr_bat_c: number | null
    ctr_device_status: number | null
    ctr_bat_status: number | null
    ctr_bat_temp_status: number | null
    ctr_solar_status: number | null
    ctr_charging_status: number | null
    robot_id: string | null
  }

  export type Ecobot_ts_info_tempCountAggregateOutputType = {
    timestamp: number
    latitude: number
    longitude: number
    plc_status: number
    ctr_pv_v: number
    ctr_pv_c: number
    ctr_bat_soc: number
    ctr_bat_max_v_today: number
    ctr_bat_min_v_today: number
    ctr_gen_energy_today: number
    ctr_gen_energy_month: number
    ctr_gen_energy_year: number
    ctr_gen_energy_total: number
    ctr_bat_v: number
    ctr_bat_c: number
    ctr_device_status: number
    ctr_bat_status: number
    ctr_bat_temp_status: number
    ctr_solar_status: number
    ctr_charging_status: number
    robot_id: number
    _all: number
  }


  export type Ecobot_ts_info_tempAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    plc_status?: true
    ctr_pv_v?: true
    ctr_pv_c?: true
    ctr_bat_soc?: true
    ctr_bat_max_v_today?: true
    ctr_bat_min_v_today?: true
    ctr_gen_energy_today?: true
    ctr_gen_energy_month?: true
    ctr_gen_energy_year?: true
    ctr_gen_energy_total?: true
    ctr_bat_v?: true
    ctr_bat_c?: true
    ctr_device_status?: true
    ctr_bat_status?: true
    ctr_bat_temp_status?: true
    ctr_solar_status?: true
    ctr_charging_status?: true
  }

  export type Ecobot_ts_info_tempSumAggregateInputType = {
    latitude?: true
    longitude?: true
    plc_status?: true
    ctr_pv_v?: true
    ctr_pv_c?: true
    ctr_bat_soc?: true
    ctr_bat_max_v_today?: true
    ctr_bat_min_v_today?: true
    ctr_gen_energy_today?: true
    ctr_gen_energy_month?: true
    ctr_gen_energy_year?: true
    ctr_gen_energy_total?: true
    ctr_bat_v?: true
    ctr_bat_c?: true
    ctr_device_status?: true
    ctr_bat_status?: true
    ctr_bat_temp_status?: true
    ctr_solar_status?: true
    ctr_charging_status?: true
  }

  export type Ecobot_ts_info_tempMinAggregateInputType = {
    timestamp?: true
    latitude?: true
    longitude?: true
    plc_status?: true
    ctr_pv_v?: true
    ctr_pv_c?: true
    ctr_bat_soc?: true
    ctr_bat_max_v_today?: true
    ctr_bat_min_v_today?: true
    ctr_gen_energy_today?: true
    ctr_gen_energy_month?: true
    ctr_gen_energy_year?: true
    ctr_gen_energy_total?: true
    ctr_bat_v?: true
    ctr_bat_c?: true
    ctr_device_status?: true
    ctr_bat_status?: true
    ctr_bat_temp_status?: true
    ctr_solar_status?: true
    ctr_charging_status?: true
    robot_id?: true
  }

  export type Ecobot_ts_info_tempMaxAggregateInputType = {
    timestamp?: true
    latitude?: true
    longitude?: true
    plc_status?: true
    ctr_pv_v?: true
    ctr_pv_c?: true
    ctr_bat_soc?: true
    ctr_bat_max_v_today?: true
    ctr_bat_min_v_today?: true
    ctr_gen_energy_today?: true
    ctr_gen_energy_month?: true
    ctr_gen_energy_year?: true
    ctr_gen_energy_total?: true
    ctr_bat_v?: true
    ctr_bat_c?: true
    ctr_device_status?: true
    ctr_bat_status?: true
    ctr_bat_temp_status?: true
    ctr_solar_status?: true
    ctr_charging_status?: true
    robot_id?: true
  }

  export type Ecobot_ts_info_tempCountAggregateInputType = {
    timestamp?: true
    latitude?: true
    longitude?: true
    plc_status?: true
    ctr_pv_v?: true
    ctr_pv_c?: true
    ctr_bat_soc?: true
    ctr_bat_max_v_today?: true
    ctr_bat_min_v_today?: true
    ctr_gen_energy_today?: true
    ctr_gen_energy_month?: true
    ctr_gen_energy_year?: true
    ctr_gen_energy_total?: true
    ctr_bat_v?: true
    ctr_bat_c?: true
    ctr_device_status?: true
    ctr_bat_status?: true
    ctr_bat_temp_status?: true
    ctr_solar_status?: true
    ctr_charging_status?: true
    robot_id?: true
    _all?: true
  }

  export type Ecobot_ts_info_tempAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ecobot_ts_info_temp to aggregate.
     */
    where?: ecobot_ts_info_tempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ecobot_ts_info_temps to fetch.
     */
    orderBy?: ecobot_ts_info_tempOrderByWithRelationInput | ecobot_ts_info_tempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ecobot_ts_info_tempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ecobot_ts_info_temps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ecobot_ts_info_temps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ecobot_ts_info_temps
    **/
    _count?: true | Ecobot_ts_info_tempCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ecobot_ts_info_tempAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ecobot_ts_info_tempSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ecobot_ts_info_tempMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ecobot_ts_info_tempMaxAggregateInputType
  }

  export type GetEcobot_ts_info_tempAggregateType<T extends Ecobot_ts_info_tempAggregateArgs> = {
        [P in keyof T & keyof AggregateEcobot_ts_info_temp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEcobot_ts_info_temp[P]>
      : GetScalarType<T[P], AggregateEcobot_ts_info_temp[P]>
  }




  export type ecobot_ts_info_tempGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ecobot_ts_info_tempWhereInput
    orderBy?: ecobot_ts_info_tempOrderByWithAggregationInput | ecobot_ts_info_tempOrderByWithAggregationInput[]
    by: Ecobot_ts_info_tempScalarFieldEnum[] | Ecobot_ts_info_tempScalarFieldEnum
    having?: ecobot_ts_info_tempScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ecobot_ts_info_tempCountAggregateInputType | true
    _avg?: Ecobot_ts_info_tempAvgAggregateInputType
    _sum?: Ecobot_ts_info_tempSumAggregateInputType
    _min?: Ecobot_ts_info_tempMinAggregateInputType
    _max?: Ecobot_ts_info_tempMaxAggregateInputType
  }

  export type Ecobot_ts_info_tempGroupByOutputType = {
    timestamp: Date
    latitude: number
    longitude: number
    plc_status: number | null
    ctr_pv_v: number | null
    ctr_pv_c: number | null
    ctr_bat_soc: number | null
    ctr_bat_max_v_today: number | null
    ctr_bat_min_v_today: number | null
    ctr_gen_energy_today: number | null
    ctr_gen_energy_month: number | null
    ctr_gen_energy_year: number | null
    ctr_gen_energy_total: number | null
    ctr_bat_v: number | null
    ctr_bat_c: number | null
    ctr_device_status: number | null
    ctr_bat_status: number | null
    ctr_bat_temp_status: number | null
    ctr_solar_status: number | null
    ctr_charging_status: number | null
    robot_id: string
    _count: Ecobot_ts_info_tempCountAggregateOutputType | null
    _avg: Ecobot_ts_info_tempAvgAggregateOutputType | null
    _sum: Ecobot_ts_info_tempSumAggregateOutputType | null
    _min: Ecobot_ts_info_tempMinAggregateOutputType | null
    _max: Ecobot_ts_info_tempMaxAggregateOutputType | null
  }

  type GetEcobot_ts_info_tempGroupByPayload<T extends ecobot_ts_info_tempGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ecobot_ts_info_tempGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ecobot_ts_info_tempGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ecobot_ts_info_tempGroupByOutputType[P]>
            : GetScalarType<T[P], Ecobot_ts_info_tempGroupByOutputType[P]>
        }
      >
    >


  export type ecobot_ts_info_tempSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timestamp?: boolean
    latitude?: boolean
    longitude?: boolean
    plc_status?: boolean
    ctr_pv_v?: boolean
    ctr_pv_c?: boolean
    ctr_bat_soc?: boolean
    ctr_bat_max_v_today?: boolean
    ctr_bat_min_v_today?: boolean
    ctr_gen_energy_today?: boolean
    ctr_gen_energy_month?: boolean
    ctr_gen_energy_year?: boolean
    ctr_gen_energy_total?: boolean
    ctr_bat_v?: boolean
    ctr_bat_c?: boolean
    ctr_device_status?: boolean
    ctr_bat_status?: boolean
    ctr_bat_temp_status?: boolean
    ctr_solar_status?: boolean
    ctr_charging_status?: boolean
    robot_id?: boolean
  }, ExtArgs["result"]["ecobot_ts_info_temp"]>

  export type ecobot_ts_info_tempSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timestamp?: boolean
    latitude?: boolean
    longitude?: boolean
    plc_status?: boolean
    ctr_pv_v?: boolean
    ctr_pv_c?: boolean
    ctr_bat_soc?: boolean
    ctr_bat_max_v_today?: boolean
    ctr_bat_min_v_today?: boolean
    ctr_gen_energy_today?: boolean
    ctr_gen_energy_month?: boolean
    ctr_gen_energy_year?: boolean
    ctr_gen_energy_total?: boolean
    ctr_bat_v?: boolean
    ctr_bat_c?: boolean
    ctr_device_status?: boolean
    ctr_bat_status?: boolean
    ctr_bat_temp_status?: boolean
    ctr_solar_status?: boolean
    ctr_charging_status?: boolean
    robot_id?: boolean
  }, ExtArgs["result"]["ecobot_ts_info_temp"]>

  export type ecobot_ts_info_tempSelectScalar = {
    timestamp?: boolean
    latitude?: boolean
    longitude?: boolean
    plc_status?: boolean
    ctr_pv_v?: boolean
    ctr_pv_c?: boolean
    ctr_bat_soc?: boolean
    ctr_bat_max_v_today?: boolean
    ctr_bat_min_v_today?: boolean
    ctr_gen_energy_today?: boolean
    ctr_gen_energy_month?: boolean
    ctr_gen_energy_year?: boolean
    ctr_gen_energy_total?: boolean
    ctr_bat_v?: boolean
    ctr_bat_c?: boolean
    ctr_device_status?: boolean
    ctr_bat_status?: boolean
    ctr_bat_temp_status?: boolean
    ctr_solar_status?: boolean
    ctr_charging_status?: boolean
    robot_id?: boolean
  }


  export type $ecobot_ts_info_tempPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ecobot_ts_info_temp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      timestamp: Date
      latitude: number
      longitude: number
      plc_status: number | null
      ctr_pv_v: number | null
      ctr_pv_c: number | null
      ctr_bat_soc: number | null
      ctr_bat_max_v_today: number | null
      ctr_bat_min_v_today: number | null
      ctr_gen_energy_today: number | null
      ctr_gen_energy_month: number | null
      ctr_gen_energy_year: number | null
      ctr_gen_energy_total: number | null
      ctr_bat_v: number | null
      ctr_bat_c: number | null
      ctr_device_status: number | null
      ctr_bat_status: number | null
      ctr_bat_temp_status: number | null
      ctr_solar_status: number | null
      ctr_charging_status: number | null
      robot_id: string
    }, ExtArgs["result"]["ecobot_ts_info_temp"]>
    composites: {}
  }

  type ecobot_ts_info_tempGetPayload<S extends boolean | null | undefined | ecobot_ts_info_tempDefaultArgs> = $Result.GetResult<Prisma.$ecobot_ts_info_tempPayload, S>

  type ecobot_ts_info_tempCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ecobot_ts_info_tempFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Ecobot_ts_info_tempCountAggregateInputType | true
    }

  export interface ecobot_ts_info_tempDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ecobot_ts_info_temp'], meta: { name: 'ecobot_ts_info_temp' } }
    /**
     * Find zero or one Ecobot_ts_info_temp that matches the filter.
     * @param {ecobot_ts_info_tempFindUniqueArgs} args - Arguments to find a Ecobot_ts_info_temp
     * @example
     * // Get one Ecobot_ts_info_temp
     * const ecobot_ts_info_temp = await prisma.ecobot_ts_info_temp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ecobot_ts_info_tempFindUniqueArgs>(args: SelectSubset<T, ecobot_ts_info_tempFindUniqueArgs<ExtArgs>>): Prisma__ecobot_ts_info_tempClient<$Result.GetResult<Prisma.$ecobot_ts_info_tempPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ecobot_ts_info_temp that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ecobot_ts_info_tempFindUniqueOrThrowArgs} args - Arguments to find a Ecobot_ts_info_temp
     * @example
     * // Get one Ecobot_ts_info_temp
     * const ecobot_ts_info_temp = await prisma.ecobot_ts_info_temp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ecobot_ts_info_tempFindUniqueOrThrowArgs>(args: SelectSubset<T, ecobot_ts_info_tempFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ecobot_ts_info_tempClient<$Result.GetResult<Prisma.$ecobot_ts_info_tempPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ecobot_ts_info_temp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecobot_ts_info_tempFindFirstArgs} args - Arguments to find a Ecobot_ts_info_temp
     * @example
     * // Get one Ecobot_ts_info_temp
     * const ecobot_ts_info_temp = await prisma.ecobot_ts_info_temp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ecobot_ts_info_tempFindFirstArgs>(args?: SelectSubset<T, ecobot_ts_info_tempFindFirstArgs<ExtArgs>>): Prisma__ecobot_ts_info_tempClient<$Result.GetResult<Prisma.$ecobot_ts_info_tempPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ecobot_ts_info_temp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecobot_ts_info_tempFindFirstOrThrowArgs} args - Arguments to find a Ecobot_ts_info_temp
     * @example
     * // Get one Ecobot_ts_info_temp
     * const ecobot_ts_info_temp = await prisma.ecobot_ts_info_temp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ecobot_ts_info_tempFindFirstOrThrowArgs>(args?: SelectSubset<T, ecobot_ts_info_tempFindFirstOrThrowArgs<ExtArgs>>): Prisma__ecobot_ts_info_tempClient<$Result.GetResult<Prisma.$ecobot_ts_info_tempPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ecobot_ts_info_temps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecobot_ts_info_tempFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ecobot_ts_info_temps
     * const ecobot_ts_info_temps = await prisma.ecobot_ts_info_temp.findMany()
     * 
     * // Get first 10 Ecobot_ts_info_temps
     * const ecobot_ts_info_temps = await prisma.ecobot_ts_info_temp.findMany({ take: 10 })
     * 
     * // Only select the `timestamp`
     * const ecobot_ts_info_tempWithTimestampOnly = await prisma.ecobot_ts_info_temp.findMany({ select: { timestamp: true } })
     * 
     */
    findMany<T extends ecobot_ts_info_tempFindManyArgs>(args?: SelectSubset<T, ecobot_ts_info_tempFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ecobot_ts_info_tempPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ecobot_ts_info_temp.
     * @param {ecobot_ts_info_tempCreateArgs} args - Arguments to create a Ecobot_ts_info_temp.
     * @example
     * // Create one Ecobot_ts_info_temp
     * const Ecobot_ts_info_temp = await prisma.ecobot_ts_info_temp.create({
     *   data: {
     *     // ... data to create a Ecobot_ts_info_temp
     *   }
     * })
     * 
     */
    create<T extends ecobot_ts_info_tempCreateArgs>(args: SelectSubset<T, ecobot_ts_info_tempCreateArgs<ExtArgs>>): Prisma__ecobot_ts_info_tempClient<$Result.GetResult<Prisma.$ecobot_ts_info_tempPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ecobot_ts_info_temps.
     * @param {ecobot_ts_info_tempCreateManyArgs} args - Arguments to create many Ecobot_ts_info_temps.
     * @example
     * // Create many Ecobot_ts_info_temps
     * const ecobot_ts_info_temp = await prisma.ecobot_ts_info_temp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ecobot_ts_info_tempCreateManyArgs>(args?: SelectSubset<T, ecobot_ts_info_tempCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ecobot_ts_info_temps and returns the data saved in the database.
     * @param {ecobot_ts_info_tempCreateManyAndReturnArgs} args - Arguments to create many Ecobot_ts_info_temps.
     * @example
     * // Create many Ecobot_ts_info_temps
     * const ecobot_ts_info_temp = await prisma.ecobot_ts_info_temp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ecobot_ts_info_temps and only return the `timestamp`
     * const ecobot_ts_info_tempWithTimestampOnly = await prisma.ecobot_ts_info_temp.createManyAndReturn({ 
     *   select: { timestamp: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ecobot_ts_info_tempCreateManyAndReturnArgs>(args?: SelectSubset<T, ecobot_ts_info_tempCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ecobot_ts_info_tempPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ecobot_ts_info_temp.
     * @param {ecobot_ts_info_tempDeleteArgs} args - Arguments to delete one Ecobot_ts_info_temp.
     * @example
     * // Delete one Ecobot_ts_info_temp
     * const Ecobot_ts_info_temp = await prisma.ecobot_ts_info_temp.delete({
     *   where: {
     *     // ... filter to delete one Ecobot_ts_info_temp
     *   }
     * })
     * 
     */
    delete<T extends ecobot_ts_info_tempDeleteArgs>(args: SelectSubset<T, ecobot_ts_info_tempDeleteArgs<ExtArgs>>): Prisma__ecobot_ts_info_tempClient<$Result.GetResult<Prisma.$ecobot_ts_info_tempPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ecobot_ts_info_temp.
     * @param {ecobot_ts_info_tempUpdateArgs} args - Arguments to update one Ecobot_ts_info_temp.
     * @example
     * // Update one Ecobot_ts_info_temp
     * const ecobot_ts_info_temp = await prisma.ecobot_ts_info_temp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ecobot_ts_info_tempUpdateArgs>(args: SelectSubset<T, ecobot_ts_info_tempUpdateArgs<ExtArgs>>): Prisma__ecobot_ts_info_tempClient<$Result.GetResult<Prisma.$ecobot_ts_info_tempPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ecobot_ts_info_temps.
     * @param {ecobot_ts_info_tempDeleteManyArgs} args - Arguments to filter Ecobot_ts_info_temps to delete.
     * @example
     * // Delete a few Ecobot_ts_info_temps
     * const { count } = await prisma.ecobot_ts_info_temp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ecobot_ts_info_tempDeleteManyArgs>(args?: SelectSubset<T, ecobot_ts_info_tempDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ecobot_ts_info_temps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecobot_ts_info_tempUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ecobot_ts_info_temps
     * const ecobot_ts_info_temp = await prisma.ecobot_ts_info_temp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ecobot_ts_info_tempUpdateManyArgs>(args: SelectSubset<T, ecobot_ts_info_tempUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ecobot_ts_info_temp.
     * @param {ecobot_ts_info_tempUpsertArgs} args - Arguments to update or create a Ecobot_ts_info_temp.
     * @example
     * // Update or create a Ecobot_ts_info_temp
     * const ecobot_ts_info_temp = await prisma.ecobot_ts_info_temp.upsert({
     *   create: {
     *     // ... data to create a Ecobot_ts_info_temp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ecobot_ts_info_temp we want to update
     *   }
     * })
     */
    upsert<T extends ecobot_ts_info_tempUpsertArgs>(args: SelectSubset<T, ecobot_ts_info_tempUpsertArgs<ExtArgs>>): Prisma__ecobot_ts_info_tempClient<$Result.GetResult<Prisma.$ecobot_ts_info_tempPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ecobot_ts_info_temps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecobot_ts_info_tempCountArgs} args - Arguments to filter Ecobot_ts_info_temps to count.
     * @example
     * // Count the number of Ecobot_ts_info_temps
     * const count = await prisma.ecobot_ts_info_temp.count({
     *   where: {
     *     // ... the filter for the Ecobot_ts_info_temps we want to count
     *   }
     * })
    **/
    count<T extends ecobot_ts_info_tempCountArgs>(
      args?: Subset<T, ecobot_ts_info_tempCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ecobot_ts_info_tempCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ecobot_ts_info_temp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ecobot_ts_info_tempAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ecobot_ts_info_tempAggregateArgs>(args: Subset<T, Ecobot_ts_info_tempAggregateArgs>): Prisma.PrismaPromise<GetEcobot_ts_info_tempAggregateType<T>>

    /**
     * Group by Ecobot_ts_info_temp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ecobot_ts_info_tempGroupByArgs} args - Group by arguments.
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
      T extends ecobot_ts_info_tempGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ecobot_ts_info_tempGroupByArgs['orderBy'] }
        : { orderBy?: ecobot_ts_info_tempGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ecobot_ts_info_tempGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEcobot_ts_info_tempGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ecobot_ts_info_temp model
   */
  readonly fields: ecobot_ts_info_tempFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ecobot_ts_info_temp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ecobot_ts_info_tempClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ecobot_ts_info_temp model
   */ 
  interface ecobot_ts_info_tempFieldRefs {
    readonly timestamp: FieldRef<"ecobot_ts_info_temp", 'DateTime'>
    readonly latitude: FieldRef<"ecobot_ts_info_temp", 'Float'>
    readonly longitude: FieldRef<"ecobot_ts_info_temp", 'Float'>
    readonly plc_status: FieldRef<"ecobot_ts_info_temp", 'Int'>
    readonly ctr_pv_v: FieldRef<"ecobot_ts_info_temp", 'Float'>
    readonly ctr_pv_c: FieldRef<"ecobot_ts_info_temp", 'Float'>
    readonly ctr_bat_soc: FieldRef<"ecobot_ts_info_temp", 'Float'>
    readonly ctr_bat_max_v_today: FieldRef<"ecobot_ts_info_temp", 'Float'>
    readonly ctr_bat_min_v_today: FieldRef<"ecobot_ts_info_temp", 'Float'>
    readonly ctr_gen_energy_today: FieldRef<"ecobot_ts_info_temp", 'Float'>
    readonly ctr_gen_energy_month: FieldRef<"ecobot_ts_info_temp", 'Float'>
    readonly ctr_gen_energy_year: FieldRef<"ecobot_ts_info_temp", 'Float'>
    readonly ctr_gen_energy_total: FieldRef<"ecobot_ts_info_temp", 'Float'>
    readonly ctr_bat_v: FieldRef<"ecobot_ts_info_temp", 'Float'>
    readonly ctr_bat_c: FieldRef<"ecobot_ts_info_temp", 'Float'>
    readonly ctr_device_status: FieldRef<"ecobot_ts_info_temp", 'Int'>
    readonly ctr_bat_status: FieldRef<"ecobot_ts_info_temp", 'Int'>
    readonly ctr_bat_temp_status: FieldRef<"ecobot_ts_info_temp", 'Int'>
    readonly ctr_solar_status: FieldRef<"ecobot_ts_info_temp", 'Int'>
    readonly ctr_charging_status: FieldRef<"ecobot_ts_info_temp", 'Int'>
    readonly robot_id: FieldRef<"ecobot_ts_info_temp", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ecobot_ts_info_temp findUnique
   */
  export type ecobot_ts_info_tempFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_ts_info_temp
     */
    select?: ecobot_ts_info_tempSelect<ExtArgs> | null
    /**
     * Filter, which ecobot_ts_info_temp to fetch.
     */
    where: ecobot_ts_info_tempWhereUniqueInput
  }

  /**
   * ecobot_ts_info_temp findUniqueOrThrow
   */
  export type ecobot_ts_info_tempFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_ts_info_temp
     */
    select?: ecobot_ts_info_tempSelect<ExtArgs> | null
    /**
     * Filter, which ecobot_ts_info_temp to fetch.
     */
    where: ecobot_ts_info_tempWhereUniqueInput
  }

  /**
   * ecobot_ts_info_temp findFirst
   */
  export type ecobot_ts_info_tempFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_ts_info_temp
     */
    select?: ecobot_ts_info_tempSelect<ExtArgs> | null
    /**
     * Filter, which ecobot_ts_info_temp to fetch.
     */
    where?: ecobot_ts_info_tempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ecobot_ts_info_temps to fetch.
     */
    orderBy?: ecobot_ts_info_tempOrderByWithRelationInput | ecobot_ts_info_tempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ecobot_ts_info_temps.
     */
    cursor?: ecobot_ts_info_tempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ecobot_ts_info_temps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ecobot_ts_info_temps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ecobot_ts_info_temps.
     */
    distinct?: Ecobot_ts_info_tempScalarFieldEnum | Ecobot_ts_info_tempScalarFieldEnum[]
  }

  /**
   * ecobot_ts_info_temp findFirstOrThrow
   */
  export type ecobot_ts_info_tempFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_ts_info_temp
     */
    select?: ecobot_ts_info_tempSelect<ExtArgs> | null
    /**
     * Filter, which ecobot_ts_info_temp to fetch.
     */
    where?: ecobot_ts_info_tempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ecobot_ts_info_temps to fetch.
     */
    orderBy?: ecobot_ts_info_tempOrderByWithRelationInput | ecobot_ts_info_tempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ecobot_ts_info_temps.
     */
    cursor?: ecobot_ts_info_tempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ecobot_ts_info_temps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ecobot_ts_info_temps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ecobot_ts_info_temps.
     */
    distinct?: Ecobot_ts_info_tempScalarFieldEnum | Ecobot_ts_info_tempScalarFieldEnum[]
  }

  /**
   * ecobot_ts_info_temp findMany
   */
  export type ecobot_ts_info_tempFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_ts_info_temp
     */
    select?: ecobot_ts_info_tempSelect<ExtArgs> | null
    /**
     * Filter, which ecobot_ts_info_temps to fetch.
     */
    where?: ecobot_ts_info_tempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ecobot_ts_info_temps to fetch.
     */
    orderBy?: ecobot_ts_info_tempOrderByWithRelationInput | ecobot_ts_info_tempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ecobot_ts_info_temps.
     */
    cursor?: ecobot_ts_info_tempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ecobot_ts_info_temps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ecobot_ts_info_temps.
     */
    skip?: number
    distinct?: Ecobot_ts_info_tempScalarFieldEnum | Ecobot_ts_info_tempScalarFieldEnum[]
  }

  /**
   * ecobot_ts_info_temp create
   */
  export type ecobot_ts_info_tempCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_ts_info_temp
     */
    select?: ecobot_ts_info_tempSelect<ExtArgs> | null
    /**
     * The data needed to create a ecobot_ts_info_temp.
     */
    data: XOR<ecobot_ts_info_tempCreateInput, ecobot_ts_info_tempUncheckedCreateInput>
  }

  /**
   * ecobot_ts_info_temp createMany
   */
  export type ecobot_ts_info_tempCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ecobot_ts_info_temps.
     */
    data: ecobot_ts_info_tempCreateManyInput | ecobot_ts_info_tempCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ecobot_ts_info_temp createManyAndReturn
   */
  export type ecobot_ts_info_tempCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_ts_info_temp
     */
    select?: ecobot_ts_info_tempSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ecobot_ts_info_temps.
     */
    data: ecobot_ts_info_tempCreateManyInput | ecobot_ts_info_tempCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ecobot_ts_info_temp update
   */
  export type ecobot_ts_info_tempUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_ts_info_temp
     */
    select?: ecobot_ts_info_tempSelect<ExtArgs> | null
    /**
     * The data needed to update a ecobot_ts_info_temp.
     */
    data: XOR<ecobot_ts_info_tempUpdateInput, ecobot_ts_info_tempUncheckedUpdateInput>
    /**
     * Choose, which ecobot_ts_info_temp to update.
     */
    where: ecobot_ts_info_tempWhereUniqueInput
  }

  /**
   * ecobot_ts_info_temp updateMany
   */
  export type ecobot_ts_info_tempUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ecobot_ts_info_temps.
     */
    data: XOR<ecobot_ts_info_tempUpdateManyMutationInput, ecobot_ts_info_tempUncheckedUpdateManyInput>
    /**
     * Filter which ecobot_ts_info_temps to update
     */
    where?: ecobot_ts_info_tempWhereInput
  }

  /**
   * ecobot_ts_info_temp upsert
   */
  export type ecobot_ts_info_tempUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_ts_info_temp
     */
    select?: ecobot_ts_info_tempSelect<ExtArgs> | null
    /**
     * The filter to search for the ecobot_ts_info_temp to update in case it exists.
     */
    where: ecobot_ts_info_tempWhereUniqueInput
    /**
     * In case the ecobot_ts_info_temp found by the `where` argument doesn't exist, create a new ecobot_ts_info_temp with this data.
     */
    create: XOR<ecobot_ts_info_tempCreateInput, ecobot_ts_info_tempUncheckedCreateInput>
    /**
     * In case the ecobot_ts_info_temp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ecobot_ts_info_tempUpdateInput, ecobot_ts_info_tempUncheckedUpdateInput>
  }

  /**
   * ecobot_ts_info_temp delete
   */
  export type ecobot_ts_info_tempDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_ts_info_temp
     */
    select?: ecobot_ts_info_tempSelect<ExtArgs> | null
    /**
     * Filter which ecobot_ts_info_temp to delete.
     */
    where: ecobot_ts_info_tempWhereUniqueInput
  }

  /**
   * ecobot_ts_info_temp deleteMany
   */
  export type ecobot_ts_info_tempDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ecobot_ts_info_temps to delete
     */
    where?: ecobot_ts_info_tempWhereInput
  }

  /**
   * ecobot_ts_info_temp without action
   */
  export type ecobot_ts_info_tempDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ecobot_ts_info_temp
     */
    select?: ecobot_ts_info_tempSelect<ExtArgs> | null
  }


  /**
   * Model water_quality
   */

  export type AggregateWater_quality = {
    _count: Water_qualityCountAggregateOutputType | null
    _avg: Water_qualityAvgAggregateOutputType | null
    _sum: Water_qualitySumAggregateOutputType | null
    _min: Water_qualityMinAggregateOutputType | null
    _max: Water_qualityMaxAggregateOutputType | null
  }

  export type Water_qualityAvgAggregateOutputType = {
    temp_deg_c: number | null
    ph_units: number | null
    depth_m: number | null
    spcond_us_cm: number | null
    turb_ntu: number | null
    hdo_sat: number | null
    hdo_mg_l: number | null
    chl_ug_l: number | null
    bg_ppb: number | null
    ph_mv: number | null
    salinity_psu: number | null
    latitude: number | null
    longitude: number | null
  }

  export type Water_qualitySumAggregateOutputType = {
    temp_deg_c: number | null
    ph_units: number | null
    depth_m: number | null
    spcond_us_cm: number | null
    turb_ntu: number | null
    hdo_sat: number | null
    hdo_mg_l: number | null
    chl_ug_l: number | null
    bg_ppb: number | null
    ph_mv: number | null
    salinity_psu: number | null
    latitude: number | null
    longitude: number | null
  }

  export type Water_qualityMinAggregateOutputType = {
    timestamp: Date | null
    temp_deg_c: number | null
    ph_units: number | null
    depth_m: number | null
    spcond_us_cm: number | null
    turb_ntu: number | null
    hdo_sat: number | null
    hdo_mg_l: number | null
    chl_ug_l: number | null
    bg_ppb: number | null
    ph_mv: number | null
    salinity_psu: number | null
    latitude: number | null
    longitude: number | null
    robot_id: string | null
  }

  export type Water_qualityMaxAggregateOutputType = {
    timestamp: Date | null
    temp_deg_c: number | null
    ph_units: number | null
    depth_m: number | null
    spcond_us_cm: number | null
    turb_ntu: number | null
    hdo_sat: number | null
    hdo_mg_l: number | null
    chl_ug_l: number | null
    bg_ppb: number | null
    ph_mv: number | null
    salinity_psu: number | null
    latitude: number | null
    longitude: number | null
    robot_id: string | null
  }

  export type Water_qualityCountAggregateOutputType = {
    timestamp: number
    temp_deg_c: number
    ph_units: number
    depth_m: number
    spcond_us_cm: number
    turb_ntu: number
    hdo_sat: number
    hdo_mg_l: number
    chl_ug_l: number
    bg_ppb: number
    ph_mv: number
    salinity_psu: number
    latitude: number
    longitude: number
    robot_id: number
    _all: number
  }


  export type Water_qualityAvgAggregateInputType = {
    temp_deg_c?: true
    ph_units?: true
    depth_m?: true
    spcond_us_cm?: true
    turb_ntu?: true
    hdo_sat?: true
    hdo_mg_l?: true
    chl_ug_l?: true
    bg_ppb?: true
    ph_mv?: true
    salinity_psu?: true
    latitude?: true
    longitude?: true
  }

  export type Water_qualitySumAggregateInputType = {
    temp_deg_c?: true
    ph_units?: true
    depth_m?: true
    spcond_us_cm?: true
    turb_ntu?: true
    hdo_sat?: true
    hdo_mg_l?: true
    chl_ug_l?: true
    bg_ppb?: true
    ph_mv?: true
    salinity_psu?: true
    latitude?: true
    longitude?: true
  }

  export type Water_qualityMinAggregateInputType = {
    timestamp?: true
    temp_deg_c?: true
    ph_units?: true
    depth_m?: true
    spcond_us_cm?: true
    turb_ntu?: true
    hdo_sat?: true
    hdo_mg_l?: true
    chl_ug_l?: true
    bg_ppb?: true
    ph_mv?: true
    salinity_psu?: true
    latitude?: true
    longitude?: true
    robot_id?: true
  }

  export type Water_qualityMaxAggregateInputType = {
    timestamp?: true
    temp_deg_c?: true
    ph_units?: true
    depth_m?: true
    spcond_us_cm?: true
    turb_ntu?: true
    hdo_sat?: true
    hdo_mg_l?: true
    chl_ug_l?: true
    bg_ppb?: true
    ph_mv?: true
    salinity_psu?: true
    latitude?: true
    longitude?: true
    robot_id?: true
  }

  export type Water_qualityCountAggregateInputType = {
    timestamp?: true
    temp_deg_c?: true
    ph_units?: true
    depth_m?: true
    spcond_us_cm?: true
    turb_ntu?: true
    hdo_sat?: true
    hdo_mg_l?: true
    chl_ug_l?: true
    bg_ppb?: true
    ph_mv?: true
    salinity_psu?: true
    latitude?: true
    longitude?: true
    robot_id?: true
    _all?: true
  }

  export type Water_qualityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which water_quality to aggregate.
     */
    where?: water_qualityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of water_qualities to fetch.
     */
    orderBy?: water_qualityOrderByWithRelationInput | water_qualityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: water_qualityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` water_qualities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` water_qualities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned water_qualities
    **/
    _count?: true | Water_qualityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Water_qualityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Water_qualitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Water_qualityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Water_qualityMaxAggregateInputType
  }

  export type GetWater_qualityAggregateType<T extends Water_qualityAggregateArgs> = {
        [P in keyof T & keyof AggregateWater_quality]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWater_quality[P]>
      : GetScalarType<T[P], AggregateWater_quality[P]>
  }




  export type water_qualityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: water_qualityWhereInput
    orderBy?: water_qualityOrderByWithAggregationInput | water_qualityOrderByWithAggregationInput[]
    by: Water_qualityScalarFieldEnum[] | Water_qualityScalarFieldEnum
    having?: water_qualityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Water_qualityCountAggregateInputType | true
    _avg?: Water_qualityAvgAggregateInputType
    _sum?: Water_qualitySumAggregateInputType
    _min?: Water_qualityMinAggregateInputType
    _max?: Water_qualityMaxAggregateInputType
  }

  export type Water_qualityGroupByOutputType = {
    timestamp: Date
    temp_deg_c: number | null
    ph_units: number | null
    depth_m: number | null
    spcond_us_cm: number | null
    turb_ntu: number | null
    hdo_sat: number | null
    hdo_mg_l: number | null
    chl_ug_l: number | null
    bg_ppb: number | null
    ph_mv: number | null
    salinity_psu: number | null
    latitude: number | null
    longitude: number | null
    robot_id: string
    _count: Water_qualityCountAggregateOutputType | null
    _avg: Water_qualityAvgAggregateOutputType | null
    _sum: Water_qualitySumAggregateOutputType | null
    _min: Water_qualityMinAggregateOutputType | null
    _max: Water_qualityMaxAggregateOutputType | null
  }

  type GetWater_qualityGroupByPayload<T extends water_qualityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Water_qualityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Water_qualityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Water_qualityGroupByOutputType[P]>
            : GetScalarType<T[P], Water_qualityGroupByOutputType[P]>
        }
      >
    >


  export type water_qualitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timestamp?: boolean
    temp_deg_c?: boolean
    ph_units?: boolean
    depth_m?: boolean
    spcond_us_cm?: boolean
    turb_ntu?: boolean
    hdo_sat?: boolean
    hdo_mg_l?: boolean
    chl_ug_l?: boolean
    bg_ppb?: boolean
    ph_mv?: boolean
    salinity_psu?: boolean
    latitude?: boolean
    longitude?: boolean
    robot_id?: boolean
  }, ExtArgs["result"]["water_quality"]>

  export type water_qualitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timestamp?: boolean
    temp_deg_c?: boolean
    ph_units?: boolean
    depth_m?: boolean
    spcond_us_cm?: boolean
    turb_ntu?: boolean
    hdo_sat?: boolean
    hdo_mg_l?: boolean
    chl_ug_l?: boolean
    bg_ppb?: boolean
    ph_mv?: boolean
    salinity_psu?: boolean
    latitude?: boolean
    longitude?: boolean
    robot_id?: boolean
  }, ExtArgs["result"]["water_quality"]>

  export type water_qualitySelectScalar = {
    timestamp?: boolean
    temp_deg_c?: boolean
    ph_units?: boolean
    depth_m?: boolean
    spcond_us_cm?: boolean
    turb_ntu?: boolean
    hdo_sat?: boolean
    hdo_mg_l?: boolean
    chl_ug_l?: boolean
    bg_ppb?: boolean
    ph_mv?: boolean
    salinity_psu?: boolean
    latitude?: boolean
    longitude?: boolean
    robot_id?: boolean
  }


  export type $water_qualityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "water_quality"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      timestamp: Date
      temp_deg_c: number | null
      ph_units: number | null
      depth_m: number | null
      spcond_us_cm: number | null
      turb_ntu: number | null
      hdo_sat: number | null
      hdo_mg_l: number | null
      chl_ug_l: number | null
      bg_ppb: number | null
      ph_mv: number | null
      salinity_psu: number | null
      latitude: number | null
      longitude: number | null
      robot_id: string
    }, ExtArgs["result"]["water_quality"]>
    composites: {}
  }

  type water_qualityGetPayload<S extends boolean | null | undefined | water_qualityDefaultArgs> = $Result.GetResult<Prisma.$water_qualityPayload, S>

  type water_qualityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<water_qualityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Water_qualityCountAggregateInputType | true
    }

  export interface water_qualityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['water_quality'], meta: { name: 'water_quality' } }
    /**
     * Find zero or one Water_quality that matches the filter.
     * @param {water_qualityFindUniqueArgs} args - Arguments to find a Water_quality
     * @example
     * // Get one Water_quality
     * const water_quality = await prisma.water_quality.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends water_qualityFindUniqueArgs>(args: SelectSubset<T, water_qualityFindUniqueArgs<ExtArgs>>): Prisma__water_qualityClient<$Result.GetResult<Prisma.$water_qualityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Water_quality that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {water_qualityFindUniqueOrThrowArgs} args - Arguments to find a Water_quality
     * @example
     * // Get one Water_quality
     * const water_quality = await prisma.water_quality.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends water_qualityFindUniqueOrThrowArgs>(args: SelectSubset<T, water_qualityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__water_qualityClient<$Result.GetResult<Prisma.$water_qualityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Water_quality that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {water_qualityFindFirstArgs} args - Arguments to find a Water_quality
     * @example
     * // Get one Water_quality
     * const water_quality = await prisma.water_quality.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends water_qualityFindFirstArgs>(args?: SelectSubset<T, water_qualityFindFirstArgs<ExtArgs>>): Prisma__water_qualityClient<$Result.GetResult<Prisma.$water_qualityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Water_quality that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {water_qualityFindFirstOrThrowArgs} args - Arguments to find a Water_quality
     * @example
     * // Get one Water_quality
     * const water_quality = await prisma.water_quality.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends water_qualityFindFirstOrThrowArgs>(args?: SelectSubset<T, water_qualityFindFirstOrThrowArgs<ExtArgs>>): Prisma__water_qualityClient<$Result.GetResult<Prisma.$water_qualityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Water_qualities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {water_qualityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Water_qualities
     * const water_qualities = await prisma.water_quality.findMany()
     * 
     * // Get first 10 Water_qualities
     * const water_qualities = await prisma.water_quality.findMany({ take: 10 })
     * 
     * // Only select the `timestamp`
     * const water_qualityWithTimestampOnly = await prisma.water_quality.findMany({ select: { timestamp: true } })
     * 
     */
    findMany<T extends water_qualityFindManyArgs>(args?: SelectSubset<T, water_qualityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$water_qualityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Water_quality.
     * @param {water_qualityCreateArgs} args - Arguments to create a Water_quality.
     * @example
     * // Create one Water_quality
     * const Water_quality = await prisma.water_quality.create({
     *   data: {
     *     // ... data to create a Water_quality
     *   }
     * })
     * 
     */
    create<T extends water_qualityCreateArgs>(args: SelectSubset<T, water_qualityCreateArgs<ExtArgs>>): Prisma__water_qualityClient<$Result.GetResult<Prisma.$water_qualityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Water_qualities.
     * @param {water_qualityCreateManyArgs} args - Arguments to create many Water_qualities.
     * @example
     * // Create many Water_qualities
     * const water_quality = await prisma.water_quality.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends water_qualityCreateManyArgs>(args?: SelectSubset<T, water_qualityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Water_qualities and returns the data saved in the database.
     * @param {water_qualityCreateManyAndReturnArgs} args - Arguments to create many Water_qualities.
     * @example
     * // Create many Water_qualities
     * const water_quality = await prisma.water_quality.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Water_qualities and only return the `timestamp`
     * const water_qualityWithTimestampOnly = await prisma.water_quality.createManyAndReturn({ 
     *   select: { timestamp: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends water_qualityCreateManyAndReturnArgs>(args?: SelectSubset<T, water_qualityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$water_qualityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Water_quality.
     * @param {water_qualityDeleteArgs} args - Arguments to delete one Water_quality.
     * @example
     * // Delete one Water_quality
     * const Water_quality = await prisma.water_quality.delete({
     *   where: {
     *     // ... filter to delete one Water_quality
     *   }
     * })
     * 
     */
    delete<T extends water_qualityDeleteArgs>(args: SelectSubset<T, water_qualityDeleteArgs<ExtArgs>>): Prisma__water_qualityClient<$Result.GetResult<Prisma.$water_qualityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Water_quality.
     * @param {water_qualityUpdateArgs} args - Arguments to update one Water_quality.
     * @example
     * // Update one Water_quality
     * const water_quality = await prisma.water_quality.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends water_qualityUpdateArgs>(args: SelectSubset<T, water_qualityUpdateArgs<ExtArgs>>): Prisma__water_qualityClient<$Result.GetResult<Prisma.$water_qualityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Water_qualities.
     * @param {water_qualityDeleteManyArgs} args - Arguments to filter Water_qualities to delete.
     * @example
     * // Delete a few Water_qualities
     * const { count } = await prisma.water_quality.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends water_qualityDeleteManyArgs>(args?: SelectSubset<T, water_qualityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Water_qualities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {water_qualityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Water_qualities
     * const water_quality = await prisma.water_quality.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends water_qualityUpdateManyArgs>(args: SelectSubset<T, water_qualityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Water_quality.
     * @param {water_qualityUpsertArgs} args - Arguments to update or create a Water_quality.
     * @example
     * // Update or create a Water_quality
     * const water_quality = await prisma.water_quality.upsert({
     *   create: {
     *     // ... data to create a Water_quality
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Water_quality we want to update
     *   }
     * })
     */
    upsert<T extends water_qualityUpsertArgs>(args: SelectSubset<T, water_qualityUpsertArgs<ExtArgs>>): Prisma__water_qualityClient<$Result.GetResult<Prisma.$water_qualityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Water_qualities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {water_qualityCountArgs} args - Arguments to filter Water_qualities to count.
     * @example
     * // Count the number of Water_qualities
     * const count = await prisma.water_quality.count({
     *   where: {
     *     // ... the filter for the Water_qualities we want to count
     *   }
     * })
    **/
    count<T extends water_qualityCountArgs>(
      args?: Subset<T, water_qualityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Water_qualityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Water_quality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Water_qualityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Water_qualityAggregateArgs>(args: Subset<T, Water_qualityAggregateArgs>): Prisma.PrismaPromise<GetWater_qualityAggregateType<T>>

    /**
     * Group by Water_quality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {water_qualityGroupByArgs} args - Group by arguments.
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
      T extends water_qualityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: water_qualityGroupByArgs['orderBy'] }
        : { orderBy?: water_qualityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, water_qualityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWater_qualityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the water_quality model
   */
  readonly fields: water_qualityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for water_quality.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__water_qualityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the water_quality model
   */ 
  interface water_qualityFieldRefs {
    readonly timestamp: FieldRef<"water_quality", 'DateTime'>
    readonly temp_deg_c: FieldRef<"water_quality", 'Float'>
    readonly ph_units: FieldRef<"water_quality", 'Float'>
    readonly depth_m: FieldRef<"water_quality", 'Float'>
    readonly spcond_us_cm: FieldRef<"water_quality", 'Float'>
    readonly turb_ntu: FieldRef<"water_quality", 'Float'>
    readonly hdo_sat: FieldRef<"water_quality", 'Float'>
    readonly hdo_mg_l: FieldRef<"water_quality", 'Float'>
    readonly chl_ug_l: FieldRef<"water_quality", 'Float'>
    readonly bg_ppb: FieldRef<"water_quality", 'Float'>
    readonly ph_mv: FieldRef<"water_quality", 'Float'>
    readonly salinity_psu: FieldRef<"water_quality", 'Float'>
    readonly latitude: FieldRef<"water_quality", 'Float'>
    readonly longitude: FieldRef<"water_quality", 'Float'>
    readonly robot_id: FieldRef<"water_quality", 'String'>
  }
    

  // Custom InputTypes
  /**
   * water_quality findUnique
   */
  export type water_qualityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_quality
     */
    select?: water_qualitySelect<ExtArgs> | null
    /**
     * Filter, which water_quality to fetch.
     */
    where: water_qualityWhereUniqueInput
  }

  /**
   * water_quality findUniqueOrThrow
   */
  export type water_qualityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_quality
     */
    select?: water_qualitySelect<ExtArgs> | null
    /**
     * Filter, which water_quality to fetch.
     */
    where: water_qualityWhereUniqueInput
  }

  /**
   * water_quality findFirst
   */
  export type water_qualityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_quality
     */
    select?: water_qualitySelect<ExtArgs> | null
    /**
     * Filter, which water_quality to fetch.
     */
    where?: water_qualityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of water_qualities to fetch.
     */
    orderBy?: water_qualityOrderByWithRelationInput | water_qualityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for water_qualities.
     */
    cursor?: water_qualityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` water_qualities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` water_qualities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of water_qualities.
     */
    distinct?: Water_qualityScalarFieldEnum | Water_qualityScalarFieldEnum[]
  }

  /**
   * water_quality findFirstOrThrow
   */
  export type water_qualityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_quality
     */
    select?: water_qualitySelect<ExtArgs> | null
    /**
     * Filter, which water_quality to fetch.
     */
    where?: water_qualityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of water_qualities to fetch.
     */
    orderBy?: water_qualityOrderByWithRelationInput | water_qualityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for water_qualities.
     */
    cursor?: water_qualityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` water_qualities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` water_qualities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of water_qualities.
     */
    distinct?: Water_qualityScalarFieldEnum | Water_qualityScalarFieldEnum[]
  }

  /**
   * water_quality findMany
   */
  export type water_qualityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_quality
     */
    select?: water_qualitySelect<ExtArgs> | null
    /**
     * Filter, which water_qualities to fetch.
     */
    where?: water_qualityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of water_qualities to fetch.
     */
    orderBy?: water_qualityOrderByWithRelationInput | water_qualityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing water_qualities.
     */
    cursor?: water_qualityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` water_qualities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` water_qualities.
     */
    skip?: number
    distinct?: Water_qualityScalarFieldEnum | Water_qualityScalarFieldEnum[]
  }

  /**
   * water_quality create
   */
  export type water_qualityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_quality
     */
    select?: water_qualitySelect<ExtArgs> | null
    /**
     * The data needed to create a water_quality.
     */
    data: XOR<water_qualityCreateInput, water_qualityUncheckedCreateInput>
  }

  /**
   * water_quality createMany
   */
  export type water_qualityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many water_qualities.
     */
    data: water_qualityCreateManyInput | water_qualityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * water_quality createManyAndReturn
   */
  export type water_qualityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_quality
     */
    select?: water_qualitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many water_qualities.
     */
    data: water_qualityCreateManyInput | water_qualityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * water_quality update
   */
  export type water_qualityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_quality
     */
    select?: water_qualitySelect<ExtArgs> | null
    /**
     * The data needed to update a water_quality.
     */
    data: XOR<water_qualityUpdateInput, water_qualityUncheckedUpdateInput>
    /**
     * Choose, which water_quality to update.
     */
    where: water_qualityWhereUniqueInput
  }

  /**
   * water_quality updateMany
   */
  export type water_qualityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update water_qualities.
     */
    data: XOR<water_qualityUpdateManyMutationInput, water_qualityUncheckedUpdateManyInput>
    /**
     * Filter which water_qualities to update
     */
    where?: water_qualityWhereInput
  }

  /**
   * water_quality upsert
   */
  export type water_qualityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_quality
     */
    select?: water_qualitySelect<ExtArgs> | null
    /**
     * The filter to search for the water_quality to update in case it exists.
     */
    where: water_qualityWhereUniqueInput
    /**
     * In case the water_quality found by the `where` argument doesn't exist, create a new water_quality with this data.
     */
    create: XOR<water_qualityCreateInput, water_qualityUncheckedCreateInput>
    /**
     * In case the water_quality was found with the provided `where` argument, update it with this data.
     */
    update: XOR<water_qualityUpdateInput, water_qualityUncheckedUpdateInput>
  }

  /**
   * water_quality delete
   */
  export type water_qualityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_quality
     */
    select?: water_qualitySelect<ExtArgs> | null
    /**
     * Filter which water_quality to delete.
     */
    where: water_qualityWhereUniqueInput
  }

  /**
   * water_quality deleteMany
   */
  export type water_qualityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which water_qualities to delete
     */
    where?: water_qualityWhereInput
  }

  /**
   * water_quality without action
   */
  export type water_qualityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_quality
     */
    select?: water_qualitySelect<ExtArgs> | null
  }


  /**
   * Model water_quality_temp
   */

  export type AggregateWater_quality_temp = {
    _count: Water_quality_tempCountAggregateOutputType | null
    _avg: Water_quality_tempAvgAggregateOutputType | null
    _sum: Water_quality_tempSumAggregateOutputType | null
    _min: Water_quality_tempMinAggregateOutputType | null
    _max: Water_quality_tempMaxAggregateOutputType | null
  }

  export type Water_quality_tempAvgAggregateOutputType = {
    temp_deg_c: number | null
    ph_units: number | null
    depth_m: number | null
    spcond_us_cm: number | null
    turb_ntu: number | null
    hdo_sat: number | null
    hdo_mg_l: number | null
    chl_ug_l: number | null
    bg_ppb: number | null
    ph_mv: number | null
    salinity_psu: number | null
    latitude: number | null
    longitude: number | null
  }

  export type Water_quality_tempSumAggregateOutputType = {
    temp_deg_c: number | null
    ph_units: number | null
    depth_m: number | null
    spcond_us_cm: number | null
    turb_ntu: number | null
    hdo_sat: number | null
    hdo_mg_l: number | null
    chl_ug_l: number | null
    bg_ppb: number | null
    ph_mv: number | null
    salinity_psu: number | null
    latitude: number | null
    longitude: number | null
  }

  export type Water_quality_tempMinAggregateOutputType = {
    timestamp: Date | null
    temp_deg_c: number | null
    ph_units: number | null
    depth_m: number | null
    spcond_us_cm: number | null
    turb_ntu: number | null
    hdo_sat: number | null
    hdo_mg_l: number | null
    chl_ug_l: number | null
    bg_ppb: number | null
    ph_mv: number | null
    salinity_psu: number | null
    latitude: number | null
    longitude: number | null
    robot_id: string | null
  }

  export type Water_quality_tempMaxAggregateOutputType = {
    timestamp: Date | null
    temp_deg_c: number | null
    ph_units: number | null
    depth_m: number | null
    spcond_us_cm: number | null
    turb_ntu: number | null
    hdo_sat: number | null
    hdo_mg_l: number | null
    chl_ug_l: number | null
    bg_ppb: number | null
    ph_mv: number | null
    salinity_psu: number | null
    latitude: number | null
    longitude: number | null
    robot_id: string | null
  }

  export type Water_quality_tempCountAggregateOutputType = {
    timestamp: number
    temp_deg_c: number
    ph_units: number
    depth_m: number
    spcond_us_cm: number
    turb_ntu: number
    hdo_sat: number
    hdo_mg_l: number
    chl_ug_l: number
    bg_ppb: number
    ph_mv: number
    salinity_psu: number
    latitude: number
    longitude: number
    robot_id: number
    _all: number
  }


  export type Water_quality_tempAvgAggregateInputType = {
    temp_deg_c?: true
    ph_units?: true
    depth_m?: true
    spcond_us_cm?: true
    turb_ntu?: true
    hdo_sat?: true
    hdo_mg_l?: true
    chl_ug_l?: true
    bg_ppb?: true
    ph_mv?: true
    salinity_psu?: true
    latitude?: true
    longitude?: true
  }

  export type Water_quality_tempSumAggregateInputType = {
    temp_deg_c?: true
    ph_units?: true
    depth_m?: true
    spcond_us_cm?: true
    turb_ntu?: true
    hdo_sat?: true
    hdo_mg_l?: true
    chl_ug_l?: true
    bg_ppb?: true
    ph_mv?: true
    salinity_psu?: true
    latitude?: true
    longitude?: true
  }

  export type Water_quality_tempMinAggregateInputType = {
    timestamp?: true
    temp_deg_c?: true
    ph_units?: true
    depth_m?: true
    spcond_us_cm?: true
    turb_ntu?: true
    hdo_sat?: true
    hdo_mg_l?: true
    chl_ug_l?: true
    bg_ppb?: true
    ph_mv?: true
    salinity_psu?: true
    latitude?: true
    longitude?: true
    robot_id?: true
  }

  export type Water_quality_tempMaxAggregateInputType = {
    timestamp?: true
    temp_deg_c?: true
    ph_units?: true
    depth_m?: true
    spcond_us_cm?: true
    turb_ntu?: true
    hdo_sat?: true
    hdo_mg_l?: true
    chl_ug_l?: true
    bg_ppb?: true
    ph_mv?: true
    salinity_psu?: true
    latitude?: true
    longitude?: true
    robot_id?: true
  }

  export type Water_quality_tempCountAggregateInputType = {
    timestamp?: true
    temp_deg_c?: true
    ph_units?: true
    depth_m?: true
    spcond_us_cm?: true
    turb_ntu?: true
    hdo_sat?: true
    hdo_mg_l?: true
    chl_ug_l?: true
    bg_ppb?: true
    ph_mv?: true
    salinity_psu?: true
    latitude?: true
    longitude?: true
    robot_id?: true
    _all?: true
  }

  export type Water_quality_tempAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which water_quality_temp to aggregate.
     */
    where?: water_quality_tempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of water_quality_temps to fetch.
     */
    orderBy?: water_quality_tempOrderByWithRelationInput | water_quality_tempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: water_quality_tempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` water_quality_temps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` water_quality_temps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned water_quality_temps
    **/
    _count?: true | Water_quality_tempCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Water_quality_tempAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Water_quality_tempSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Water_quality_tempMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Water_quality_tempMaxAggregateInputType
  }

  export type GetWater_quality_tempAggregateType<T extends Water_quality_tempAggregateArgs> = {
        [P in keyof T & keyof AggregateWater_quality_temp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWater_quality_temp[P]>
      : GetScalarType<T[P], AggregateWater_quality_temp[P]>
  }




  export type water_quality_tempGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: water_quality_tempWhereInput
    orderBy?: water_quality_tempOrderByWithAggregationInput | water_quality_tempOrderByWithAggregationInput[]
    by: Water_quality_tempScalarFieldEnum[] | Water_quality_tempScalarFieldEnum
    having?: water_quality_tempScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Water_quality_tempCountAggregateInputType | true
    _avg?: Water_quality_tempAvgAggregateInputType
    _sum?: Water_quality_tempSumAggregateInputType
    _min?: Water_quality_tempMinAggregateInputType
    _max?: Water_quality_tempMaxAggregateInputType
  }

  export type Water_quality_tempGroupByOutputType = {
    timestamp: Date
    temp_deg_c: number | null
    ph_units: number | null
    depth_m: number | null
    spcond_us_cm: number | null
    turb_ntu: number | null
    hdo_sat: number | null
    hdo_mg_l: number | null
    chl_ug_l: number | null
    bg_ppb: number | null
    ph_mv: number | null
    salinity_psu: number | null
    latitude: number | null
    longitude: number | null
    robot_id: string
    _count: Water_quality_tempCountAggregateOutputType | null
    _avg: Water_quality_tempAvgAggregateOutputType | null
    _sum: Water_quality_tempSumAggregateOutputType | null
    _min: Water_quality_tempMinAggregateOutputType | null
    _max: Water_quality_tempMaxAggregateOutputType | null
  }

  type GetWater_quality_tempGroupByPayload<T extends water_quality_tempGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Water_quality_tempGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Water_quality_tempGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Water_quality_tempGroupByOutputType[P]>
            : GetScalarType<T[P], Water_quality_tempGroupByOutputType[P]>
        }
      >
    >


  export type water_quality_tempSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timestamp?: boolean
    temp_deg_c?: boolean
    ph_units?: boolean
    depth_m?: boolean
    spcond_us_cm?: boolean
    turb_ntu?: boolean
    hdo_sat?: boolean
    hdo_mg_l?: boolean
    chl_ug_l?: boolean
    bg_ppb?: boolean
    ph_mv?: boolean
    salinity_psu?: boolean
    latitude?: boolean
    longitude?: boolean
    robot_id?: boolean
  }, ExtArgs["result"]["water_quality_temp"]>

  export type water_quality_tempSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timestamp?: boolean
    temp_deg_c?: boolean
    ph_units?: boolean
    depth_m?: boolean
    spcond_us_cm?: boolean
    turb_ntu?: boolean
    hdo_sat?: boolean
    hdo_mg_l?: boolean
    chl_ug_l?: boolean
    bg_ppb?: boolean
    ph_mv?: boolean
    salinity_psu?: boolean
    latitude?: boolean
    longitude?: boolean
    robot_id?: boolean
  }, ExtArgs["result"]["water_quality_temp"]>

  export type water_quality_tempSelectScalar = {
    timestamp?: boolean
    temp_deg_c?: boolean
    ph_units?: boolean
    depth_m?: boolean
    spcond_us_cm?: boolean
    turb_ntu?: boolean
    hdo_sat?: boolean
    hdo_mg_l?: boolean
    chl_ug_l?: boolean
    bg_ppb?: boolean
    ph_mv?: boolean
    salinity_psu?: boolean
    latitude?: boolean
    longitude?: boolean
    robot_id?: boolean
  }


  export type $water_quality_tempPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "water_quality_temp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      timestamp: Date
      temp_deg_c: number | null
      ph_units: number | null
      depth_m: number | null
      spcond_us_cm: number | null
      turb_ntu: number | null
      hdo_sat: number | null
      hdo_mg_l: number | null
      chl_ug_l: number | null
      bg_ppb: number | null
      ph_mv: number | null
      salinity_psu: number | null
      latitude: number | null
      longitude: number | null
      robot_id: string
    }, ExtArgs["result"]["water_quality_temp"]>
    composites: {}
  }

  type water_quality_tempGetPayload<S extends boolean | null | undefined | water_quality_tempDefaultArgs> = $Result.GetResult<Prisma.$water_quality_tempPayload, S>

  type water_quality_tempCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<water_quality_tempFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Water_quality_tempCountAggregateInputType | true
    }

  export interface water_quality_tempDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['water_quality_temp'], meta: { name: 'water_quality_temp' } }
    /**
     * Find zero or one Water_quality_temp that matches the filter.
     * @param {water_quality_tempFindUniqueArgs} args - Arguments to find a Water_quality_temp
     * @example
     * // Get one Water_quality_temp
     * const water_quality_temp = await prisma.water_quality_temp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends water_quality_tempFindUniqueArgs>(args: SelectSubset<T, water_quality_tempFindUniqueArgs<ExtArgs>>): Prisma__water_quality_tempClient<$Result.GetResult<Prisma.$water_quality_tempPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Water_quality_temp that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {water_quality_tempFindUniqueOrThrowArgs} args - Arguments to find a Water_quality_temp
     * @example
     * // Get one Water_quality_temp
     * const water_quality_temp = await prisma.water_quality_temp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends water_quality_tempFindUniqueOrThrowArgs>(args: SelectSubset<T, water_quality_tempFindUniqueOrThrowArgs<ExtArgs>>): Prisma__water_quality_tempClient<$Result.GetResult<Prisma.$water_quality_tempPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Water_quality_temp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {water_quality_tempFindFirstArgs} args - Arguments to find a Water_quality_temp
     * @example
     * // Get one Water_quality_temp
     * const water_quality_temp = await prisma.water_quality_temp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends water_quality_tempFindFirstArgs>(args?: SelectSubset<T, water_quality_tempFindFirstArgs<ExtArgs>>): Prisma__water_quality_tempClient<$Result.GetResult<Prisma.$water_quality_tempPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Water_quality_temp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {water_quality_tempFindFirstOrThrowArgs} args - Arguments to find a Water_quality_temp
     * @example
     * // Get one Water_quality_temp
     * const water_quality_temp = await prisma.water_quality_temp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends water_quality_tempFindFirstOrThrowArgs>(args?: SelectSubset<T, water_quality_tempFindFirstOrThrowArgs<ExtArgs>>): Prisma__water_quality_tempClient<$Result.GetResult<Prisma.$water_quality_tempPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Water_quality_temps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {water_quality_tempFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Water_quality_temps
     * const water_quality_temps = await prisma.water_quality_temp.findMany()
     * 
     * // Get first 10 Water_quality_temps
     * const water_quality_temps = await prisma.water_quality_temp.findMany({ take: 10 })
     * 
     * // Only select the `timestamp`
     * const water_quality_tempWithTimestampOnly = await prisma.water_quality_temp.findMany({ select: { timestamp: true } })
     * 
     */
    findMany<T extends water_quality_tempFindManyArgs>(args?: SelectSubset<T, water_quality_tempFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$water_quality_tempPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Water_quality_temp.
     * @param {water_quality_tempCreateArgs} args - Arguments to create a Water_quality_temp.
     * @example
     * // Create one Water_quality_temp
     * const Water_quality_temp = await prisma.water_quality_temp.create({
     *   data: {
     *     // ... data to create a Water_quality_temp
     *   }
     * })
     * 
     */
    create<T extends water_quality_tempCreateArgs>(args: SelectSubset<T, water_quality_tempCreateArgs<ExtArgs>>): Prisma__water_quality_tempClient<$Result.GetResult<Prisma.$water_quality_tempPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Water_quality_temps.
     * @param {water_quality_tempCreateManyArgs} args - Arguments to create many Water_quality_temps.
     * @example
     * // Create many Water_quality_temps
     * const water_quality_temp = await prisma.water_quality_temp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends water_quality_tempCreateManyArgs>(args?: SelectSubset<T, water_quality_tempCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Water_quality_temps and returns the data saved in the database.
     * @param {water_quality_tempCreateManyAndReturnArgs} args - Arguments to create many Water_quality_temps.
     * @example
     * // Create many Water_quality_temps
     * const water_quality_temp = await prisma.water_quality_temp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Water_quality_temps and only return the `timestamp`
     * const water_quality_tempWithTimestampOnly = await prisma.water_quality_temp.createManyAndReturn({ 
     *   select: { timestamp: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends water_quality_tempCreateManyAndReturnArgs>(args?: SelectSubset<T, water_quality_tempCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$water_quality_tempPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Water_quality_temp.
     * @param {water_quality_tempDeleteArgs} args - Arguments to delete one Water_quality_temp.
     * @example
     * // Delete one Water_quality_temp
     * const Water_quality_temp = await prisma.water_quality_temp.delete({
     *   where: {
     *     // ... filter to delete one Water_quality_temp
     *   }
     * })
     * 
     */
    delete<T extends water_quality_tempDeleteArgs>(args: SelectSubset<T, water_quality_tempDeleteArgs<ExtArgs>>): Prisma__water_quality_tempClient<$Result.GetResult<Prisma.$water_quality_tempPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Water_quality_temp.
     * @param {water_quality_tempUpdateArgs} args - Arguments to update one Water_quality_temp.
     * @example
     * // Update one Water_quality_temp
     * const water_quality_temp = await prisma.water_quality_temp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends water_quality_tempUpdateArgs>(args: SelectSubset<T, water_quality_tempUpdateArgs<ExtArgs>>): Prisma__water_quality_tempClient<$Result.GetResult<Prisma.$water_quality_tempPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Water_quality_temps.
     * @param {water_quality_tempDeleteManyArgs} args - Arguments to filter Water_quality_temps to delete.
     * @example
     * // Delete a few Water_quality_temps
     * const { count } = await prisma.water_quality_temp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends water_quality_tempDeleteManyArgs>(args?: SelectSubset<T, water_quality_tempDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Water_quality_temps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {water_quality_tempUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Water_quality_temps
     * const water_quality_temp = await prisma.water_quality_temp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends water_quality_tempUpdateManyArgs>(args: SelectSubset<T, water_quality_tempUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Water_quality_temp.
     * @param {water_quality_tempUpsertArgs} args - Arguments to update or create a Water_quality_temp.
     * @example
     * // Update or create a Water_quality_temp
     * const water_quality_temp = await prisma.water_quality_temp.upsert({
     *   create: {
     *     // ... data to create a Water_quality_temp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Water_quality_temp we want to update
     *   }
     * })
     */
    upsert<T extends water_quality_tempUpsertArgs>(args: SelectSubset<T, water_quality_tempUpsertArgs<ExtArgs>>): Prisma__water_quality_tempClient<$Result.GetResult<Prisma.$water_quality_tempPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Water_quality_temps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {water_quality_tempCountArgs} args - Arguments to filter Water_quality_temps to count.
     * @example
     * // Count the number of Water_quality_temps
     * const count = await prisma.water_quality_temp.count({
     *   where: {
     *     // ... the filter for the Water_quality_temps we want to count
     *   }
     * })
    **/
    count<T extends water_quality_tempCountArgs>(
      args?: Subset<T, water_quality_tempCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Water_quality_tempCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Water_quality_temp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Water_quality_tempAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Water_quality_tempAggregateArgs>(args: Subset<T, Water_quality_tempAggregateArgs>): Prisma.PrismaPromise<GetWater_quality_tempAggregateType<T>>

    /**
     * Group by Water_quality_temp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {water_quality_tempGroupByArgs} args - Group by arguments.
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
      T extends water_quality_tempGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: water_quality_tempGroupByArgs['orderBy'] }
        : { orderBy?: water_quality_tempGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, water_quality_tempGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWater_quality_tempGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the water_quality_temp model
   */
  readonly fields: water_quality_tempFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for water_quality_temp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__water_quality_tempClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the water_quality_temp model
   */ 
  interface water_quality_tempFieldRefs {
    readonly timestamp: FieldRef<"water_quality_temp", 'DateTime'>
    readonly temp_deg_c: FieldRef<"water_quality_temp", 'Float'>
    readonly ph_units: FieldRef<"water_quality_temp", 'Float'>
    readonly depth_m: FieldRef<"water_quality_temp", 'Float'>
    readonly spcond_us_cm: FieldRef<"water_quality_temp", 'Float'>
    readonly turb_ntu: FieldRef<"water_quality_temp", 'Float'>
    readonly hdo_sat: FieldRef<"water_quality_temp", 'Float'>
    readonly hdo_mg_l: FieldRef<"water_quality_temp", 'Float'>
    readonly chl_ug_l: FieldRef<"water_quality_temp", 'Float'>
    readonly bg_ppb: FieldRef<"water_quality_temp", 'Float'>
    readonly ph_mv: FieldRef<"water_quality_temp", 'Float'>
    readonly salinity_psu: FieldRef<"water_quality_temp", 'Float'>
    readonly latitude: FieldRef<"water_quality_temp", 'Float'>
    readonly longitude: FieldRef<"water_quality_temp", 'Float'>
    readonly robot_id: FieldRef<"water_quality_temp", 'String'>
  }
    

  // Custom InputTypes
  /**
   * water_quality_temp findUnique
   */
  export type water_quality_tempFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_quality_temp
     */
    select?: water_quality_tempSelect<ExtArgs> | null
    /**
     * Filter, which water_quality_temp to fetch.
     */
    where: water_quality_tempWhereUniqueInput
  }

  /**
   * water_quality_temp findUniqueOrThrow
   */
  export type water_quality_tempFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_quality_temp
     */
    select?: water_quality_tempSelect<ExtArgs> | null
    /**
     * Filter, which water_quality_temp to fetch.
     */
    where: water_quality_tempWhereUniqueInput
  }

  /**
   * water_quality_temp findFirst
   */
  export type water_quality_tempFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_quality_temp
     */
    select?: water_quality_tempSelect<ExtArgs> | null
    /**
     * Filter, which water_quality_temp to fetch.
     */
    where?: water_quality_tempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of water_quality_temps to fetch.
     */
    orderBy?: water_quality_tempOrderByWithRelationInput | water_quality_tempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for water_quality_temps.
     */
    cursor?: water_quality_tempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` water_quality_temps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` water_quality_temps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of water_quality_temps.
     */
    distinct?: Water_quality_tempScalarFieldEnum | Water_quality_tempScalarFieldEnum[]
  }

  /**
   * water_quality_temp findFirstOrThrow
   */
  export type water_quality_tempFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_quality_temp
     */
    select?: water_quality_tempSelect<ExtArgs> | null
    /**
     * Filter, which water_quality_temp to fetch.
     */
    where?: water_quality_tempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of water_quality_temps to fetch.
     */
    orderBy?: water_quality_tempOrderByWithRelationInput | water_quality_tempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for water_quality_temps.
     */
    cursor?: water_quality_tempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` water_quality_temps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` water_quality_temps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of water_quality_temps.
     */
    distinct?: Water_quality_tempScalarFieldEnum | Water_quality_tempScalarFieldEnum[]
  }

  /**
   * water_quality_temp findMany
   */
  export type water_quality_tempFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_quality_temp
     */
    select?: water_quality_tempSelect<ExtArgs> | null
    /**
     * Filter, which water_quality_temps to fetch.
     */
    where?: water_quality_tempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of water_quality_temps to fetch.
     */
    orderBy?: water_quality_tempOrderByWithRelationInput | water_quality_tempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing water_quality_temps.
     */
    cursor?: water_quality_tempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` water_quality_temps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` water_quality_temps.
     */
    skip?: number
    distinct?: Water_quality_tempScalarFieldEnum | Water_quality_tempScalarFieldEnum[]
  }

  /**
   * water_quality_temp create
   */
  export type water_quality_tempCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_quality_temp
     */
    select?: water_quality_tempSelect<ExtArgs> | null
    /**
     * The data needed to create a water_quality_temp.
     */
    data: XOR<water_quality_tempCreateInput, water_quality_tempUncheckedCreateInput>
  }

  /**
   * water_quality_temp createMany
   */
  export type water_quality_tempCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many water_quality_temps.
     */
    data: water_quality_tempCreateManyInput | water_quality_tempCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * water_quality_temp createManyAndReturn
   */
  export type water_quality_tempCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_quality_temp
     */
    select?: water_quality_tempSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many water_quality_temps.
     */
    data: water_quality_tempCreateManyInput | water_quality_tempCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * water_quality_temp update
   */
  export type water_quality_tempUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_quality_temp
     */
    select?: water_quality_tempSelect<ExtArgs> | null
    /**
     * The data needed to update a water_quality_temp.
     */
    data: XOR<water_quality_tempUpdateInput, water_quality_tempUncheckedUpdateInput>
    /**
     * Choose, which water_quality_temp to update.
     */
    where: water_quality_tempWhereUniqueInput
  }

  /**
   * water_quality_temp updateMany
   */
  export type water_quality_tempUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update water_quality_temps.
     */
    data: XOR<water_quality_tempUpdateManyMutationInput, water_quality_tempUncheckedUpdateManyInput>
    /**
     * Filter which water_quality_temps to update
     */
    where?: water_quality_tempWhereInput
  }

  /**
   * water_quality_temp upsert
   */
  export type water_quality_tempUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_quality_temp
     */
    select?: water_quality_tempSelect<ExtArgs> | null
    /**
     * The filter to search for the water_quality_temp to update in case it exists.
     */
    where: water_quality_tempWhereUniqueInput
    /**
     * In case the water_quality_temp found by the `where` argument doesn't exist, create a new water_quality_temp with this data.
     */
    create: XOR<water_quality_tempCreateInput, water_quality_tempUncheckedCreateInput>
    /**
     * In case the water_quality_temp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<water_quality_tempUpdateInput, water_quality_tempUncheckedUpdateInput>
  }

  /**
   * water_quality_temp delete
   */
  export type water_quality_tempDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_quality_temp
     */
    select?: water_quality_tempSelect<ExtArgs> | null
    /**
     * Filter which water_quality_temp to delete.
     */
    where: water_quality_tempWhereUniqueInput
  }

  /**
   * water_quality_temp deleteMany
   */
  export type water_quality_tempDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which water_quality_temps to delete
     */
    where?: water_quality_tempWhereInput
  }

  /**
   * water_quality_temp without action
   */
  export type water_quality_tempDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_quality_temp
     */
    select?: water_quality_tempSelect<ExtArgs> | null
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


  export const Ecobot_statusScalarFieldEnum: {
    timestamp: 'timestamp',
    latitude: 'latitude',
    longitude: 'longitude',
    depth_data: 'depth_data',
    velocity: 'velocity',
    current_state: 'current_state',
    plc_status: 'plc_status',
    pump_values: 'pump_values',
    ctr_pv_v: 'ctr_pv_v',
    ctr_pv_c: 'ctr_pv_c',
    ctr_bat_temp: 'ctr_bat_temp',
    ctr_device_temp: 'ctr_device_temp',
    ctr_bat_soc: 'ctr_bat_soc',
    ctr_bat_max_v_today: 'ctr_bat_max_v_today',
    ctr_bat_min_v_today: 'ctr_bat_min_v_today',
    ctr_gen_energy_today: 'ctr_gen_energy_today',
    ctr_gen_energy_month: 'ctr_gen_energy_month',
    ctr_gen_energy_year: 'ctr_gen_energy_year',
    ctr_gen_energy_total: 'ctr_gen_energy_total',
    ctr_bat_v: 'ctr_bat_v',
    ctr_bat_c: 'ctr_bat_c',
    ctr_device_status: 'ctr_device_status',
    ctr_bat_status: 'ctr_bat_status',
    ctr_bat_temp_status: 'ctr_bat_temp_status',
    ctr_solar_status: 'ctr_solar_status',
    ctr_charging_status: 'ctr_charging_status',
    robot_id: 'robot_id'
  };

  export type Ecobot_statusScalarFieldEnum = (typeof Ecobot_statusScalarFieldEnum)[keyof typeof Ecobot_statusScalarFieldEnum]


  export const Ecobot_status_tempScalarFieldEnum: {
    timestamp: 'timestamp',
    latitude: 'latitude',
    longitude: 'longitude',
    yaw: 'yaw',
    current_angular_vel: 'current_angular_vel',
    bearing: 'bearing',
    distance: 'distance',
    course_goal_distance_threshold: 'course_goal_distance_threshold',
    holding_goal_distance_threshold: 'holding_goal_distance_threshold',
    course_min_velocity: 'course_min_velocity',
    holding_min_velocity: 'holding_min_velocity',
    course_min_ang_velocity: 'course_min_ang_velocity',
    holding_min_ang_velocity: 'holding_min_ang_velocity',
    bearing_diff: 'bearing_diff',
    depth_data: 'depth_data',
    velocity: 'velocity',
    velocity_direction: 'velocity_direction',
    current_state: 'current_state',
    current_course_state: 'current_course_state',
    plc_status: 'plc_status',
    motor_values: 'motor_values',
    pump_values: 'pump_values',
    ctr_pv_v: 'ctr_pv_v',
    ctr_pv_c: 'ctr_pv_c',
    ctr_bat_temp: 'ctr_bat_temp',
    ctr_device_temp: 'ctr_device_temp',
    ctr_bat_soc: 'ctr_bat_soc',
    ctr_bat_max_v_today: 'ctr_bat_max_v_today',
    ctr_bat_min_v_today: 'ctr_bat_min_v_today',
    ctr_gen_energy_today: 'ctr_gen_energy_today',
    ctr_gen_energy_month: 'ctr_gen_energy_month',
    ctr_gen_energy_year: 'ctr_gen_energy_year',
    ctr_gen_energy_total: 'ctr_gen_energy_total',
    ctr_bat_v: 'ctr_bat_v',
    ctr_bat_c: 'ctr_bat_c',
    ctr_device_status: 'ctr_device_status',
    ctr_bat_status: 'ctr_bat_status',
    ctr_bat_temp_status: 'ctr_bat_temp_status',
    ctr_solar_status: 'ctr_solar_status',
    ctr_charging_status: 'ctr_charging_status',
    other_values: 'other_values',
    current_speeds: 'current_speeds',
    robot_id: 'robot_id'
  };

  export type Ecobot_status_tempScalarFieldEnum = (typeof Ecobot_status_tempScalarFieldEnum)[keyof typeof Ecobot_status_tempScalarFieldEnum]


  export const Ecobot_ts_infoScalarFieldEnum: {
    timestamp: 'timestamp',
    latitude: 'latitude',
    longitude: 'longitude',
    plc_status: 'plc_status',
    ctr_pv_v: 'ctr_pv_v',
    ctr_pv_c: 'ctr_pv_c',
    ctr_bat_soc: 'ctr_bat_soc',
    ctr_bat_max_v_today: 'ctr_bat_max_v_today',
    ctr_bat_min_v_today: 'ctr_bat_min_v_today',
    ctr_gen_energy_today: 'ctr_gen_energy_today',
    ctr_gen_energy_month: 'ctr_gen_energy_month',
    ctr_gen_energy_year: 'ctr_gen_energy_year',
    ctr_gen_energy_total: 'ctr_gen_energy_total',
    ctr_bat_v: 'ctr_bat_v',
    ctr_bat_c: 'ctr_bat_c',
    ctr_device_status: 'ctr_device_status',
    ctr_bat_status: 'ctr_bat_status',
    ctr_bat_temp_status: 'ctr_bat_temp_status',
    ctr_solar_status: 'ctr_solar_status',
    ctr_charging_status: 'ctr_charging_status',
    robot_id: 'robot_id'
  };

  export type Ecobot_ts_infoScalarFieldEnum = (typeof Ecobot_ts_infoScalarFieldEnum)[keyof typeof Ecobot_ts_infoScalarFieldEnum]


  export const Ecobot_ts_info_tempScalarFieldEnum: {
    timestamp: 'timestamp',
    latitude: 'latitude',
    longitude: 'longitude',
    plc_status: 'plc_status',
    ctr_pv_v: 'ctr_pv_v',
    ctr_pv_c: 'ctr_pv_c',
    ctr_bat_soc: 'ctr_bat_soc',
    ctr_bat_max_v_today: 'ctr_bat_max_v_today',
    ctr_bat_min_v_today: 'ctr_bat_min_v_today',
    ctr_gen_energy_today: 'ctr_gen_energy_today',
    ctr_gen_energy_month: 'ctr_gen_energy_month',
    ctr_gen_energy_year: 'ctr_gen_energy_year',
    ctr_gen_energy_total: 'ctr_gen_energy_total',
    ctr_bat_v: 'ctr_bat_v',
    ctr_bat_c: 'ctr_bat_c',
    ctr_device_status: 'ctr_device_status',
    ctr_bat_status: 'ctr_bat_status',
    ctr_bat_temp_status: 'ctr_bat_temp_status',
    ctr_solar_status: 'ctr_solar_status',
    ctr_charging_status: 'ctr_charging_status',
    robot_id: 'robot_id'
  };

  export type Ecobot_ts_info_tempScalarFieldEnum = (typeof Ecobot_ts_info_tempScalarFieldEnum)[keyof typeof Ecobot_ts_info_tempScalarFieldEnum]


  export const Water_qualityScalarFieldEnum: {
    timestamp: 'timestamp',
    temp_deg_c: 'temp_deg_c',
    ph_units: 'ph_units',
    depth_m: 'depth_m',
    spcond_us_cm: 'spcond_us_cm',
    turb_ntu: 'turb_ntu',
    hdo_sat: 'hdo_sat',
    hdo_mg_l: 'hdo_mg_l',
    chl_ug_l: 'chl_ug_l',
    bg_ppb: 'bg_ppb',
    ph_mv: 'ph_mv',
    salinity_psu: 'salinity_psu',
    latitude: 'latitude',
    longitude: 'longitude',
    robot_id: 'robot_id'
  };

  export type Water_qualityScalarFieldEnum = (typeof Water_qualityScalarFieldEnum)[keyof typeof Water_qualityScalarFieldEnum]


  export const Water_quality_tempScalarFieldEnum: {
    timestamp: 'timestamp',
    temp_deg_c: 'temp_deg_c',
    ph_units: 'ph_units',
    depth_m: 'depth_m',
    spcond_us_cm: 'spcond_us_cm',
    turb_ntu: 'turb_ntu',
    hdo_sat: 'hdo_sat',
    hdo_mg_l: 'hdo_mg_l',
    chl_ug_l: 'chl_ug_l',
    bg_ppb: 'bg_ppb',
    ph_mv: 'ph_mv',
    salinity_psu: 'salinity_psu',
    latitude: 'latitude',
    longitude: 'longitude',
    robot_id: 'robot_id'
  };

  export type Water_quality_tempScalarFieldEnum = (typeof Water_quality_tempScalarFieldEnum)[keyof typeof Water_quality_tempScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    
  /**
   * Deep Input Types
   */


  export type ecobot_statusWhereInput = {
    AND?: ecobot_statusWhereInput | ecobot_statusWhereInput[]
    OR?: ecobot_statusWhereInput[]
    NOT?: ecobot_statusWhereInput | ecobot_statusWhereInput[]
    timestamp?: DateTimeFilter<"ecobot_status"> | Date | string
    latitude?: FloatFilter<"ecobot_status"> | number
    longitude?: FloatFilter<"ecobot_status"> | number
    depth_data?: FloatNullableFilter<"ecobot_status"> | number | null
    velocity?: FloatNullableFilter<"ecobot_status"> | number | null
    current_state?: IntNullableFilter<"ecobot_status"> | number | null
    plc_status?: IntNullableFilter<"ecobot_status"> | number | null
    pump_values?: IntNullableListFilter<"ecobot_status">
    ctr_pv_v?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_pv_c?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_bat_temp?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_device_temp?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_bat_soc?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_bat_max_v_today?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_bat_min_v_today?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_gen_energy_today?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_gen_energy_month?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_gen_energy_year?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_gen_energy_total?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_bat_v?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_bat_c?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_device_status?: IntNullableFilter<"ecobot_status"> | number | null
    ctr_bat_status?: IntNullableFilter<"ecobot_status"> | number | null
    ctr_bat_temp_status?: IntNullableFilter<"ecobot_status"> | number | null
    ctr_solar_status?: IntNullableFilter<"ecobot_status"> | number | null
    ctr_charging_status?: IntNullableFilter<"ecobot_status"> | number | null
    robot_id?: StringFilter<"ecobot_status"> | string
  }

  export type ecobot_statusOrderByWithRelationInput = {
    timestamp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    depth_data?: SortOrderInput | SortOrder
    velocity?: SortOrderInput | SortOrder
    current_state?: SortOrderInput | SortOrder
    plc_status?: SortOrderInput | SortOrder
    pump_values?: SortOrder
    ctr_pv_v?: SortOrderInput | SortOrder
    ctr_pv_c?: SortOrderInput | SortOrder
    ctr_bat_temp?: SortOrderInput | SortOrder
    ctr_device_temp?: SortOrderInput | SortOrder
    ctr_bat_soc?: SortOrderInput | SortOrder
    ctr_bat_max_v_today?: SortOrderInput | SortOrder
    ctr_bat_min_v_today?: SortOrderInput | SortOrder
    ctr_gen_energy_today?: SortOrderInput | SortOrder
    ctr_gen_energy_month?: SortOrderInput | SortOrder
    ctr_gen_energy_year?: SortOrderInput | SortOrder
    ctr_gen_energy_total?: SortOrderInput | SortOrder
    ctr_bat_v?: SortOrderInput | SortOrder
    ctr_bat_c?: SortOrderInput | SortOrder
    ctr_device_status?: SortOrderInput | SortOrder
    ctr_bat_status?: SortOrderInput | SortOrder
    ctr_bat_temp_status?: SortOrderInput | SortOrder
    ctr_solar_status?: SortOrderInput | SortOrder
    ctr_charging_status?: SortOrderInput | SortOrder
    robot_id?: SortOrder
  }

  export type ecobot_statusWhereUniqueInput = Prisma.AtLeast<{
    robot_id_timestamp?: ecobot_statusRobot_idTimestampCompoundUniqueInput
    AND?: ecobot_statusWhereInput | ecobot_statusWhereInput[]
    OR?: ecobot_statusWhereInput[]
    NOT?: ecobot_statusWhereInput | ecobot_statusWhereInput[]
    timestamp?: DateTimeFilter<"ecobot_status"> | Date | string
    latitude?: FloatFilter<"ecobot_status"> | number
    longitude?: FloatFilter<"ecobot_status"> | number
    depth_data?: FloatNullableFilter<"ecobot_status"> | number | null
    velocity?: FloatNullableFilter<"ecobot_status"> | number | null
    current_state?: IntNullableFilter<"ecobot_status"> | number | null
    plc_status?: IntNullableFilter<"ecobot_status"> | number | null
    pump_values?: IntNullableListFilter<"ecobot_status">
    ctr_pv_v?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_pv_c?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_bat_temp?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_device_temp?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_bat_soc?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_bat_max_v_today?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_bat_min_v_today?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_gen_energy_today?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_gen_energy_month?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_gen_energy_year?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_gen_energy_total?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_bat_v?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_bat_c?: FloatNullableFilter<"ecobot_status"> | number | null
    ctr_device_status?: IntNullableFilter<"ecobot_status"> | number | null
    ctr_bat_status?: IntNullableFilter<"ecobot_status"> | number | null
    ctr_bat_temp_status?: IntNullableFilter<"ecobot_status"> | number | null
    ctr_solar_status?: IntNullableFilter<"ecobot_status"> | number | null
    ctr_charging_status?: IntNullableFilter<"ecobot_status"> | number | null
    robot_id?: StringFilter<"ecobot_status"> | string
  }, "robot_id_timestamp">

  export type ecobot_statusOrderByWithAggregationInput = {
    timestamp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    depth_data?: SortOrderInput | SortOrder
    velocity?: SortOrderInput | SortOrder
    current_state?: SortOrderInput | SortOrder
    plc_status?: SortOrderInput | SortOrder
    pump_values?: SortOrder
    ctr_pv_v?: SortOrderInput | SortOrder
    ctr_pv_c?: SortOrderInput | SortOrder
    ctr_bat_temp?: SortOrderInput | SortOrder
    ctr_device_temp?: SortOrderInput | SortOrder
    ctr_bat_soc?: SortOrderInput | SortOrder
    ctr_bat_max_v_today?: SortOrderInput | SortOrder
    ctr_bat_min_v_today?: SortOrderInput | SortOrder
    ctr_gen_energy_today?: SortOrderInput | SortOrder
    ctr_gen_energy_month?: SortOrderInput | SortOrder
    ctr_gen_energy_year?: SortOrderInput | SortOrder
    ctr_gen_energy_total?: SortOrderInput | SortOrder
    ctr_bat_v?: SortOrderInput | SortOrder
    ctr_bat_c?: SortOrderInput | SortOrder
    ctr_device_status?: SortOrderInput | SortOrder
    ctr_bat_status?: SortOrderInput | SortOrder
    ctr_bat_temp_status?: SortOrderInput | SortOrder
    ctr_solar_status?: SortOrderInput | SortOrder
    ctr_charging_status?: SortOrderInput | SortOrder
    robot_id?: SortOrder
    _count?: ecobot_statusCountOrderByAggregateInput
    _avg?: ecobot_statusAvgOrderByAggregateInput
    _max?: ecobot_statusMaxOrderByAggregateInput
    _min?: ecobot_statusMinOrderByAggregateInput
    _sum?: ecobot_statusSumOrderByAggregateInput
  }

  export type ecobot_statusScalarWhereWithAggregatesInput = {
    AND?: ecobot_statusScalarWhereWithAggregatesInput | ecobot_statusScalarWhereWithAggregatesInput[]
    OR?: ecobot_statusScalarWhereWithAggregatesInput[]
    NOT?: ecobot_statusScalarWhereWithAggregatesInput | ecobot_statusScalarWhereWithAggregatesInput[]
    timestamp?: DateTimeWithAggregatesFilter<"ecobot_status"> | Date | string
    latitude?: FloatWithAggregatesFilter<"ecobot_status"> | number
    longitude?: FloatWithAggregatesFilter<"ecobot_status"> | number
    depth_data?: FloatNullableWithAggregatesFilter<"ecobot_status"> | number | null
    velocity?: FloatNullableWithAggregatesFilter<"ecobot_status"> | number | null
    current_state?: IntNullableWithAggregatesFilter<"ecobot_status"> | number | null
    plc_status?: IntNullableWithAggregatesFilter<"ecobot_status"> | number | null
    pump_values?: IntNullableListFilter<"ecobot_status">
    ctr_pv_v?: FloatNullableWithAggregatesFilter<"ecobot_status"> | number | null
    ctr_pv_c?: FloatNullableWithAggregatesFilter<"ecobot_status"> | number | null
    ctr_bat_temp?: FloatNullableWithAggregatesFilter<"ecobot_status"> | number | null
    ctr_device_temp?: FloatNullableWithAggregatesFilter<"ecobot_status"> | number | null
    ctr_bat_soc?: FloatNullableWithAggregatesFilter<"ecobot_status"> | number | null
    ctr_bat_max_v_today?: FloatNullableWithAggregatesFilter<"ecobot_status"> | number | null
    ctr_bat_min_v_today?: FloatNullableWithAggregatesFilter<"ecobot_status"> | number | null
    ctr_gen_energy_today?: FloatNullableWithAggregatesFilter<"ecobot_status"> | number | null
    ctr_gen_energy_month?: FloatNullableWithAggregatesFilter<"ecobot_status"> | number | null
    ctr_gen_energy_year?: FloatNullableWithAggregatesFilter<"ecobot_status"> | number | null
    ctr_gen_energy_total?: FloatNullableWithAggregatesFilter<"ecobot_status"> | number | null
    ctr_bat_v?: FloatNullableWithAggregatesFilter<"ecobot_status"> | number | null
    ctr_bat_c?: FloatNullableWithAggregatesFilter<"ecobot_status"> | number | null
    ctr_device_status?: IntNullableWithAggregatesFilter<"ecobot_status"> | number | null
    ctr_bat_status?: IntNullableWithAggregatesFilter<"ecobot_status"> | number | null
    ctr_bat_temp_status?: IntNullableWithAggregatesFilter<"ecobot_status"> | number | null
    ctr_solar_status?: IntNullableWithAggregatesFilter<"ecobot_status"> | number | null
    ctr_charging_status?: IntNullableWithAggregatesFilter<"ecobot_status"> | number | null
    robot_id?: StringWithAggregatesFilter<"ecobot_status"> | string
  }

  export type ecobot_status_tempWhereInput = {
    AND?: ecobot_status_tempWhereInput | ecobot_status_tempWhereInput[]
    OR?: ecobot_status_tempWhereInput[]
    NOT?: ecobot_status_tempWhereInput | ecobot_status_tempWhereInput[]
    timestamp?: DateTimeFilter<"ecobot_status_temp"> | Date | string
    latitude?: FloatFilter<"ecobot_status_temp"> | number
    longitude?: FloatFilter<"ecobot_status_temp"> | number
    yaw?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    current_angular_vel?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    bearing?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    distance?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    course_goal_distance_threshold?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    holding_goal_distance_threshold?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    course_min_velocity?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    holding_min_velocity?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    course_min_ang_velocity?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    holding_min_ang_velocity?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    bearing_diff?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    depth_data?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    velocity?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    velocity_direction?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    current_state?: IntNullableFilter<"ecobot_status_temp"> | number | null
    current_course_state?: IntNullableFilter<"ecobot_status_temp"> | number | null
    plc_status?: IntNullableFilter<"ecobot_status_temp"> | number | null
    motor_values?: IntNullableListFilter<"ecobot_status_temp">
    pump_values?: IntNullableListFilter<"ecobot_status_temp">
    ctr_pv_v?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_pv_c?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_bat_temp?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_device_temp?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_bat_soc?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_bat_max_v_today?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_bat_min_v_today?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_gen_energy_today?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_gen_energy_month?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_gen_energy_year?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_gen_energy_total?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_bat_v?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_bat_c?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_device_status?: IntNullableFilter<"ecobot_status_temp"> | number | null
    ctr_bat_status?: IntNullableFilter<"ecobot_status_temp"> | number | null
    ctr_bat_temp_status?: IntNullableFilter<"ecobot_status_temp"> | number | null
    ctr_solar_status?: IntNullableFilter<"ecobot_status_temp"> | number | null
    ctr_charging_status?: IntNullableFilter<"ecobot_status_temp"> | number | null
    other_values?: IntNullableListFilter<"ecobot_status_temp">
    current_speeds?: IntNullableListFilter<"ecobot_status_temp">
    robot_id?: StringFilter<"ecobot_status_temp"> | string
  }

  export type ecobot_status_tempOrderByWithRelationInput = {
    timestamp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    yaw?: SortOrderInput | SortOrder
    current_angular_vel?: SortOrderInput | SortOrder
    bearing?: SortOrderInput | SortOrder
    distance?: SortOrderInput | SortOrder
    course_goal_distance_threshold?: SortOrderInput | SortOrder
    holding_goal_distance_threshold?: SortOrderInput | SortOrder
    course_min_velocity?: SortOrderInput | SortOrder
    holding_min_velocity?: SortOrderInput | SortOrder
    course_min_ang_velocity?: SortOrderInput | SortOrder
    holding_min_ang_velocity?: SortOrderInput | SortOrder
    bearing_diff?: SortOrderInput | SortOrder
    depth_data?: SortOrderInput | SortOrder
    velocity?: SortOrderInput | SortOrder
    velocity_direction?: SortOrderInput | SortOrder
    current_state?: SortOrderInput | SortOrder
    current_course_state?: SortOrderInput | SortOrder
    plc_status?: SortOrderInput | SortOrder
    motor_values?: SortOrder
    pump_values?: SortOrder
    ctr_pv_v?: SortOrderInput | SortOrder
    ctr_pv_c?: SortOrderInput | SortOrder
    ctr_bat_temp?: SortOrderInput | SortOrder
    ctr_device_temp?: SortOrderInput | SortOrder
    ctr_bat_soc?: SortOrderInput | SortOrder
    ctr_bat_max_v_today?: SortOrderInput | SortOrder
    ctr_bat_min_v_today?: SortOrderInput | SortOrder
    ctr_gen_energy_today?: SortOrderInput | SortOrder
    ctr_gen_energy_month?: SortOrderInput | SortOrder
    ctr_gen_energy_year?: SortOrderInput | SortOrder
    ctr_gen_energy_total?: SortOrderInput | SortOrder
    ctr_bat_v?: SortOrderInput | SortOrder
    ctr_bat_c?: SortOrderInput | SortOrder
    ctr_device_status?: SortOrderInput | SortOrder
    ctr_bat_status?: SortOrderInput | SortOrder
    ctr_bat_temp_status?: SortOrderInput | SortOrder
    ctr_solar_status?: SortOrderInput | SortOrder
    ctr_charging_status?: SortOrderInput | SortOrder
    other_values?: SortOrder
    current_speeds?: SortOrder
    robot_id?: SortOrder
  }

  export type ecobot_status_tempWhereUniqueInput = Prisma.AtLeast<{
    robot_id_timestamp?: ecobot_status_tempRobot_idTimestampCompoundUniqueInput
    AND?: ecobot_status_tempWhereInput | ecobot_status_tempWhereInput[]
    OR?: ecobot_status_tempWhereInput[]
    NOT?: ecobot_status_tempWhereInput | ecobot_status_tempWhereInput[]
    timestamp?: DateTimeFilter<"ecobot_status_temp"> | Date | string
    latitude?: FloatFilter<"ecobot_status_temp"> | number
    longitude?: FloatFilter<"ecobot_status_temp"> | number
    yaw?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    current_angular_vel?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    bearing?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    distance?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    course_goal_distance_threshold?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    holding_goal_distance_threshold?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    course_min_velocity?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    holding_min_velocity?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    course_min_ang_velocity?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    holding_min_ang_velocity?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    bearing_diff?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    depth_data?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    velocity?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    velocity_direction?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    current_state?: IntNullableFilter<"ecobot_status_temp"> | number | null
    current_course_state?: IntNullableFilter<"ecobot_status_temp"> | number | null
    plc_status?: IntNullableFilter<"ecobot_status_temp"> | number | null
    motor_values?: IntNullableListFilter<"ecobot_status_temp">
    pump_values?: IntNullableListFilter<"ecobot_status_temp">
    ctr_pv_v?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_pv_c?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_bat_temp?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_device_temp?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_bat_soc?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_bat_max_v_today?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_bat_min_v_today?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_gen_energy_today?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_gen_energy_month?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_gen_energy_year?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_gen_energy_total?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_bat_v?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_bat_c?: FloatNullableFilter<"ecobot_status_temp"> | number | null
    ctr_device_status?: IntNullableFilter<"ecobot_status_temp"> | number | null
    ctr_bat_status?: IntNullableFilter<"ecobot_status_temp"> | number | null
    ctr_bat_temp_status?: IntNullableFilter<"ecobot_status_temp"> | number | null
    ctr_solar_status?: IntNullableFilter<"ecobot_status_temp"> | number | null
    ctr_charging_status?: IntNullableFilter<"ecobot_status_temp"> | number | null
    other_values?: IntNullableListFilter<"ecobot_status_temp">
    current_speeds?: IntNullableListFilter<"ecobot_status_temp">
    robot_id?: StringFilter<"ecobot_status_temp"> | string
  }, "robot_id_timestamp">

  export type ecobot_status_tempOrderByWithAggregationInput = {
    timestamp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    yaw?: SortOrderInput | SortOrder
    current_angular_vel?: SortOrderInput | SortOrder
    bearing?: SortOrderInput | SortOrder
    distance?: SortOrderInput | SortOrder
    course_goal_distance_threshold?: SortOrderInput | SortOrder
    holding_goal_distance_threshold?: SortOrderInput | SortOrder
    course_min_velocity?: SortOrderInput | SortOrder
    holding_min_velocity?: SortOrderInput | SortOrder
    course_min_ang_velocity?: SortOrderInput | SortOrder
    holding_min_ang_velocity?: SortOrderInput | SortOrder
    bearing_diff?: SortOrderInput | SortOrder
    depth_data?: SortOrderInput | SortOrder
    velocity?: SortOrderInput | SortOrder
    velocity_direction?: SortOrderInput | SortOrder
    current_state?: SortOrderInput | SortOrder
    current_course_state?: SortOrderInput | SortOrder
    plc_status?: SortOrderInput | SortOrder
    motor_values?: SortOrder
    pump_values?: SortOrder
    ctr_pv_v?: SortOrderInput | SortOrder
    ctr_pv_c?: SortOrderInput | SortOrder
    ctr_bat_temp?: SortOrderInput | SortOrder
    ctr_device_temp?: SortOrderInput | SortOrder
    ctr_bat_soc?: SortOrderInput | SortOrder
    ctr_bat_max_v_today?: SortOrderInput | SortOrder
    ctr_bat_min_v_today?: SortOrderInput | SortOrder
    ctr_gen_energy_today?: SortOrderInput | SortOrder
    ctr_gen_energy_month?: SortOrderInput | SortOrder
    ctr_gen_energy_year?: SortOrderInput | SortOrder
    ctr_gen_energy_total?: SortOrderInput | SortOrder
    ctr_bat_v?: SortOrderInput | SortOrder
    ctr_bat_c?: SortOrderInput | SortOrder
    ctr_device_status?: SortOrderInput | SortOrder
    ctr_bat_status?: SortOrderInput | SortOrder
    ctr_bat_temp_status?: SortOrderInput | SortOrder
    ctr_solar_status?: SortOrderInput | SortOrder
    ctr_charging_status?: SortOrderInput | SortOrder
    other_values?: SortOrder
    current_speeds?: SortOrder
    robot_id?: SortOrder
    _count?: ecobot_status_tempCountOrderByAggregateInput
    _avg?: ecobot_status_tempAvgOrderByAggregateInput
    _max?: ecobot_status_tempMaxOrderByAggregateInput
    _min?: ecobot_status_tempMinOrderByAggregateInput
    _sum?: ecobot_status_tempSumOrderByAggregateInput
  }

  export type ecobot_status_tempScalarWhereWithAggregatesInput = {
    AND?: ecobot_status_tempScalarWhereWithAggregatesInput | ecobot_status_tempScalarWhereWithAggregatesInput[]
    OR?: ecobot_status_tempScalarWhereWithAggregatesInput[]
    NOT?: ecobot_status_tempScalarWhereWithAggregatesInput | ecobot_status_tempScalarWhereWithAggregatesInput[]
    timestamp?: DateTimeWithAggregatesFilter<"ecobot_status_temp"> | Date | string
    latitude?: FloatWithAggregatesFilter<"ecobot_status_temp"> | number
    longitude?: FloatWithAggregatesFilter<"ecobot_status_temp"> | number
    yaw?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    current_angular_vel?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    bearing?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    distance?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    course_goal_distance_threshold?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    holding_goal_distance_threshold?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    course_min_velocity?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    holding_min_velocity?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    course_min_ang_velocity?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    holding_min_ang_velocity?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    bearing_diff?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    depth_data?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    velocity?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    velocity_direction?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    current_state?: IntNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    current_course_state?: IntNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    plc_status?: IntNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    motor_values?: IntNullableListFilter<"ecobot_status_temp">
    pump_values?: IntNullableListFilter<"ecobot_status_temp">
    ctr_pv_v?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    ctr_pv_c?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    ctr_bat_temp?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    ctr_device_temp?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    ctr_bat_soc?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    ctr_bat_max_v_today?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    ctr_bat_min_v_today?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    ctr_gen_energy_today?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    ctr_gen_energy_month?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    ctr_gen_energy_year?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    ctr_gen_energy_total?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    ctr_bat_v?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    ctr_bat_c?: FloatNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    ctr_device_status?: IntNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    ctr_bat_status?: IntNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    ctr_bat_temp_status?: IntNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    ctr_solar_status?: IntNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    ctr_charging_status?: IntNullableWithAggregatesFilter<"ecobot_status_temp"> | number | null
    other_values?: IntNullableListFilter<"ecobot_status_temp">
    current_speeds?: IntNullableListFilter<"ecobot_status_temp">
    robot_id?: StringWithAggregatesFilter<"ecobot_status_temp"> | string
  }

  export type ecobot_ts_infoWhereInput = {
    AND?: ecobot_ts_infoWhereInput | ecobot_ts_infoWhereInput[]
    OR?: ecobot_ts_infoWhereInput[]
    NOT?: ecobot_ts_infoWhereInput | ecobot_ts_infoWhereInput[]
    timestamp?: DateTimeFilter<"ecobot_ts_info"> | Date | string
    latitude?: FloatFilter<"ecobot_ts_info"> | number
    longitude?: FloatFilter<"ecobot_ts_info"> | number
    plc_status?: IntNullableFilter<"ecobot_ts_info"> | number | null
    ctr_pv_v?: FloatNullableFilter<"ecobot_ts_info"> | number | null
    ctr_pv_c?: FloatNullableFilter<"ecobot_ts_info"> | number | null
    ctr_bat_soc?: FloatNullableFilter<"ecobot_ts_info"> | number | null
    ctr_bat_max_v_today?: FloatNullableFilter<"ecobot_ts_info"> | number | null
    ctr_bat_min_v_today?: FloatNullableFilter<"ecobot_ts_info"> | number | null
    ctr_gen_energy_today?: FloatNullableFilter<"ecobot_ts_info"> | number | null
    ctr_gen_energy_month?: FloatNullableFilter<"ecobot_ts_info"> | number | null
    ctr_gen_energy_year?: FloatNullableFilter<"ecobot_ts_info"> | number | null
    ctr_gen_energy_total?: FloatNullableFilter<"ecobot_ts_info"> | number | null
    ctr_bat_v?: FloatNullableFilter<"ecobot_ts_info"> | number | null
    ctr_bat_c?: FloatNullableFilter<"ecobot_ts_info"> | number | null
    ctr_device_status?: IntNullableFilter<"ecobot_ts_info"> | number | null
    ctr_bat_status?: IntNullableFilter<"ecobot_ts_info"> | number | null
    ctr_bat_temp_status?: IntNullableFilter<"ecobot_ts_info"> | number | null
    ctr_solar_status?: IntNullableFilter<"ecobot_ts_info"> | number | null
    ctr_charging_status?: IntNullableFilter<"ecobot_ts_info"> | number | null
    robot_id?: StringFilter<"ecobot_ts_info"> | string
  }

  export type ecobot_ts_infoOrderByWithRelationInput = {
    timestamp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    plc_status?: SortOrderInput | SortOrder
    ctr_pv_v?: SortOrderInput | SortOrder
    ctr_pv_c?: SortOrderInput | SortOrder
    ctr_bat_soc?: SortOrderInput | SortOrder
    ctr_bat_max_v_today?: SortOrderInput | SortOrder
    ctr_bat_min_v_today?: SortOrderInput | SortOrder
    ctr_gen_energy_today?: SortOrderInput | SortOrder
    ctr_gen_energy_month?: SortOrderInput | SortOrder
    ctr_gen_energy_year?: SortOrderInput | SortOrder
    ctr_gen_energy_total?: SortOrderInput | SortOrder
    ctr_bat_v?: SortOrderInput | SortOrder
    ctr_bat_c?: SortOrderInput | SortOrder
    ctr_device_status?: SortOrderInput | SortOrder
    ctr_bat_status?: SortOrderInput | SortOrder
    ctr_bat_temp_status?: SortOrderInput | SortOrder
    ctr_solar_status?: SortOrderInput | SortOrder
    ctr_charging_status?: SortOrderInput | SortOrder
    robot_id?: SortOrder
  }

  export type ecobot_ts_infoWhereUniqueInput = Prisma.AtLeast<{
    robot_id_timestamp?: ecobot_ts_infoRobot_idTimestampCompoundUniqueInput
    AND?: ecobot_ts_infoWhereInput | ecobot_ts_infoWhereInput[]
    OR?: ecobot_ts_infoWhereInput[]
    NOT?: ecobot_ts_infoWhereInput | ecobot_ts_infoWhereInput[]
    timestamp?: DateTimeFilter<"ecobot_ts_info"> | Date | string
    latitude?: FloatFilter<"ecobot_ts_info"> | number
    longitude?: FloatFilter<"ecobot_ts_info"> | number
    plc_status?: IntNullableFilter<"ecobot_ts_info"> | number | null
    ctr_pv_v?: FloatNullableFilter<"ecobot_ts_info"> | number | null
    ctr_pv_c?: FloatNullableFilter<"ecobot_ts_info"> | number | null
    ctr_bat_soc?: FloatNullableFilter<"ecobot_ts_info"> | number | null
    ctr_bat_max_v_today?: FloatNullableFilter<"ecobot_ts_info"> | number | null
    ctr_bat_min_v_today?: FloatNullableFilter<"ecobot_ts_info"> | number | null
    ctr_gen_energy_today?: FloatNullableFilter<"ecobot_ts_info"> | number | null
    ctr_gen_energy_month?: FloatNullableFilter<"ecobot_ts_info"> | number | null
    ctr_gen_energy_year?: FloatNullableFilter<"ecobot_ts_info"> | number | null
    ctr_gen_energy_total?: FloatNullableFilter<"ecobot_ts_info"> | number | null
    ctr_bat_v?: FloatNullableFilter<"ecobot_ts_info"> | number | null
    ctr_bat_c?: FloatNullableFilter<"ecobot_ts_info"> | number | null
    ctr_device_status?: IntNullableFilter<"ecobot_ts_info"> | number | null
    ctr_bat_status?: IntNullableFilter<"ecobot_ts_info"> | number | null
    ctr_bat_temp_status?: IntNullableFilter<"ecobot_ts_info"> | number | null
    ctr_solar_status?: IntNullableFilter<"ecobot_ts_info"> | number | null
    ctr_charging_status?: IntNullableFilter<"ecobot_ts_info"> | number | null
    robot_id?: StringFilter<"ecobot_ts_info"> | string
  }, "robot_id_timestamp">

  export type ecobot_ts_infoOrderByWithAggregationInput = {
    timestamp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    plc_status?: SortOrderInput | SortOrder
    ctr_pv_v?: SortOrderInput | SortOrder
    ctr_pv_c?: SortOrderInput | SortOrder
    ctr_bat_soc?: SortOrderInput | SortOrder
    ctr_bat_max_v_today?: SortOrderInput | SortOrder
    ctr_bat_min_v_today?: SortOrderInput | SortOrder
    ctr_gen_energy_today?: SortOrderInput | SortOrder
    ctr_gen_energy_month?: SortOrderInput | SortOrder
    ctr_gen_energy_year?: SortOrderInput | SortOrder
    ctr_gen_energy_total?: SortOrderInput | SortOrder
    ctr_bat_v?: SortOrderInput | SortOrder
    ctr_bat_c?: SortOrderInput | SortOrder
    ctr_device_status?: SortOrderInput | SortOrder
    ctr_bat_status?: SortOrderInput | SortOrder
    ctr_bat_temp_status?: SortOrderInput | SortOrder
    ctr_solar_status?: SortOrderInput | SortOrder
    ctr_charging_status?: SortOrderInput | SortOrder
    robot_id?: SortOrder
    _count?: ecobot_ts_infoCountOrderByAggregateInput
    _avg?: ecobot_ts_infoAvgOrderByAggregateInput
    _max?: ecobot_ts_infoMaxOrderByAggregateInput
    _min?: ecobot_ts_infoMinOrderByAggregateInput
    _sum?: ecobot_ts_infoSumOrderByAggregateInput
  }

  export type ecobot_ts_infoScalarWhereWithAggregatesInput = {
    AND?: ecobot_ts_infoScalarWhereWithAggregatesInput | ecobot_ts_infoScalarWhereWithAggregatesInput[]
    OR?: ecobot_ts_infoScalarWhereWithAggregatesInput[]
    NOT?: ecobot_ts_infoScalarWhereWithAggregatesInput | ecobot_ts_infoScalarWhereWithAggregatesInput[]
    timestamp?: DateTimeWithAggregatesFilter<"ecobot_ts_info"> | Date | string
    latitude?: FloatWithAggregatesFilter<"ecobot_ts_info"> | number
    longitude?: FloatWithAggregatesFilter<"ecobot_ts_info"> | number
    plc_status?: IntNullableWithAggregatesFilter<"ecobot_ts_info"> | number | null
    ctr_pv_v?: FloatNullableWithAggregatesFilter<"ecobot_ts_info"> | number | null
    ctr_pv_c?: FloatNullableWithAggregatesFilter<"ecobot_ts_info"> | number | null
    ctr_bat_soc?: FloatNullableWithAggregatesFilter<"ecobot_ts_info"> | number | null
    ctr_bat_max_v_today?: FloatNullableWithAggregatesFilter<"ecobot_ts_info"> | number | null
    ctr_bat_min_v_today?: FloatNullableWithAggregatesFilter<"ecobot_ts_info"> | number | null
    ctr_gen_energy_today?: FloatNullableWithAggregatesFilter<"ecobot_ts_info"> | number | null
    ctr_gen_energy_month?: FloatNullableWithAggregatesFilter<"ecobot_ts_info"> | number | null
    ctr_gen_energy_year?: FloatNullableWithAggregatesFilter<"ecobot_ts_info"> | number | null
    ctr_gen_energy_total?: FloatNullableWithAggregatesFilter<"ecobot_ts_info"> | number | null
    ctr_bat_v?: FloatNullableWithAggregatesFilter<"ecobot_ts_info"> | number | null
    ctr_bat_c?: FloatNullableWithAggregatesFilter<"ecobot_ts_info"> | number | null
    ctr_device_status?: IntNullableWithAggregatesFilter<"ecobot_ts_info"> | number | null
    ctr_bat_status?: IntNullableWithAggregatesFilter<"ecobot_ts_info"> | number | null
    ctr_bat_temp_status?: IntNullableWithAggregatesFilter<"ecobot_ts_info"> | number | null
    ctr_solar_status?: IntNullableWithAggregatesFilter<"ecobot_ts_info"> | number | null
    ctr_charging_status?: IntNullableWithAggregatesFilter<"ecobot_ts_info"> | number | null
    robot_id?: StringWithAggregatesFilter<"ecobot_ts_info"> | string
  }

  export type ecobot_ts_info_tempWhereInput = {
    AND?: ecobot_ts_info_tempWhereInput | ecobot_ts_info_tempWhereInput[]
    OR?: ecobot_ts_info_tempWhereInput[]
    NOT?: ecobot_ts_info_tempWhereInput | ecobot_ts_info_tempWhereInput[]
    timestamp?: DateTimeFilter<"ecobot_ts_info_temp"> | Date | string
    latitude?: FloatFilter<"ecobot_ts_info_temp"> | number
    longitude?: FloatFilter<"ecobot_ts_info_temp"> | number
    plc_status?: IntNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_pv_v?: FloatNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_pv_c?: FloatNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_bat_soc?: FloatNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_bat_max_v_today?: FloatNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_bat_min_v_today?: FloatNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_gen_energy_today?: FloatNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_gen_energy_month?: FloatNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_gen_energy_year?: FloatNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_gen_energy_total?: FloatNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_bat_v?: FloatNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_bat_c?: FloatNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_device_status?: IntNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_bat_status?: IntNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_bat_temp_status?: IntNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_solar_status?: IntNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_charging_status?: IntNullableFilter<"ecobot_ts_info_temp"> | number | null
    robot_id?: StringFilter<"ecobot_ts_info_temp"> | string
  }

  export type ecobot_ts_info_tempOrderByWithRelationInput = {
    timestamp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    plc_status?: SortOrderInput | SortOrder
    ctr_pv_v?: SortOrderInput | SortOrder
    ctr_pv_c?: SortOrderInput | SortOrder
    ctr_bat_soc?: SortOrderInput | SortOrder
    ctr_bat_max_v_today?: SortOrderInput | SortOrder
    ctr_bat_min_v_today?: SortOrderInput | SortOrder
    ctr_gen_energy_today?: SortOrderInput | SortOrder
    ctr_gen_energy_month?: SortOrderInput | SortOrder
    ctr_gen_energy_year?: SortOrderInput | SortOrder
    ctr_gen_energy_total?: SortOrderInput | SortOrder
    ctr_bat_v?: SortOrderInput | SortOrder
    ctr_bat_c?: SortOrderInput | SortOrder
    ctr_device_status?: SortOrderInput | SortOrder
    ctr_bat_status?: SortOrderInput | SortOrder
    ctr_bat_temp_status?: SortOrderInput | SortOrder
    ctr_solar_status?: SortOrderInput | SortOrder
    ctr_charging_status?: SortOrderInput | SortOrder
    robot_id?: SortOrder
  }

  export type ecobot_ts_info_tempWhereUniqueInput = Prisma.AtLeast<{
    robot_id_timestamp?: ecobot_ts_info_tempRobot_idTimestampCompoundUniqueInput
    AND?: ecobot_ts_info_tempWhereInput | ecobot_ts_info_tempWhereInput[]
    OR?: ecobot_ts_info_tempWhereInput[]
    NOT?: ecobot_ts_info_tempWhereInput | ecobot_ts_info_tempWhereInput[]
    timestamp?: DateTimeFilter<"ecobot_ts_info_temp"> | Date | string
    latitude?: FloatFilter<"ecobot_ts_info_temp"> | number
    longitude?: FloatFilter<"ecobot_ts_info_temp"> | number
    plc_status?: IntNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_pv_v?: FloatNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_pv_c?: FloatNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_bat_soc?: FloatNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_bat_max_v_today?: FloatNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_bat_min_v_today?: FloatNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_gen_energy_today?: FloatNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_gen_energy_month?: FloatNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_gen_energy_year?: FloatNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_gen_energy_total?: FloatNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_bat_v?: FloatNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_bat_c?: FloatNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_device_status?: IntNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_bat_status?: IntNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_bat_temp_status?: IntNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_solar_status?: IntNullableFilter<"ecobot_ts_info_temp"> | number | null
    ctr_charging_status?: IntNullableFilter<"ecobot_ts_info_temp"> | number | null
    robot_id?: StringFilter<"ecobot_ts_info_temp"> | string
  }, "robot_id_timestamp">

  export type ecobot_ts_info_tempOrderByWithAggregationInput = {
    timestamp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    plc_status?: SortOrderInput | SortOrder
    ctr_pv_v?: SortOrderInput | SortOrder
    ctr_pv_c?: SortOrderInput | SortOrder
    ctr_bat_soc?: SortOrderInput | SortOrder
    ctr_bat_max_v_today?: SortOrderInput | SortOrder
    ctr_bat_min_v_today?: SortOrderInput | SortOrder
    ctr_gen_energy_today?: SortOrderInput | SortOrder
    ctr_gen_energy_month?: SortOrderInput | SortOrder
    ctr_gen_energy_year?: SortOrderInput | SortOrder
    ctr_gen_energy_total?: SortOrderInput | SortOrder
    ctr_bat_v?: SortOrderInput | SortOrder
    ctr_bat_c?: SortOrderInput | SortOrder
    ctr_device_status?: SortOrderInput | SortOrder
    ctr_bat_status?: SortOrderInput | SortOrder
    ctr_bat_temp_status?: SortOrderInput | SortOrder
    ctr_solar_status?: SortOrderInput | SortOrder
    ctr_charging_status?: SortOrderInput | SortOrder
    robot_id?: SortOrder
    _count?: ecobot_ts_info_tempCountOrderByAggregateInput
    _avg?: ecobot_ts_info_tempAvgOrderByAggregateInput
    _max?: ecobot_ts_info_tempMaxOrderByAggregateInput
    _min?: ecobot_ts_info_tempMinOrderByAggregateInput
    _sum?: ecobot_ts_info_tempSumOrderByAggregateInput
  }

  export type ecobot_ts_info_tempScalarWhereWithAggregatesInput = {
    AND?: ecobot_ts_info_tempScalarWhereWithAggregatesInput | ecobot_ts_info_tempScalarWhereWithAggregatesInput[]
    OR?: ecobot_ts_info_tempScalarWhereWithAggregatesInput[]
    NOT?: ecobot_ts_info_tempScalarWhereWithAggregatesInput | ecobot_ts_info_tempScalarWhereWithAggregatesInput[]
    timestamp?: DateTimeWithAggregatesFilter<"ecobot_ts_info_temp"> | Date | string
    latitude?: FloatWithAggregatesFilter<"ecobot_ts_info_temp"> | number
    longitude?: FloatWithAggregatesFilter<"ecobot_ts_info_temp"> | number
    plc_status?: IntNullableWithAggregatesFilter<"ecobot_ts_info_temp"> | number | null
    ctr_pv_v?: FloatNullableWithAggregatesFilter<"ecobot_ts_info_temp"> | number | null
    ctr_pv_c?: FloatNullableWithAggregatesFilter<"ecobot_ts_info_temp"> | number | null
    ctr_bat_soc?: FloatNullableWithAggregatesFilter<"ecobot_ts_info_temp"> | number | null
    ctr_bat_max_v_today?: FloatNullableWithAggregatesFilter<"ecobot_ts_info_temp"> | number | null
    ctr_bat_min_v_today?: FloatNullableWithAggregatesFilter<"ecobot_ts_info_temp"> | number | null
    ctr_gen_energy_today?: FloatNullableWithAggregatesFilter<"ecobot_ts_info_temp"> | number | null
    ctr_gen_energy_month?: FloatNullableWithAggregatesFilter<"ecobot_ts_info_temp"> | number | null
    ctr_gen_energy_year?: FloatNullableWithAggregatesFilter<"ecobot_ts_info_temp"> | number | null
    ctr_gen_energy_total?: FloatNullableWithAggregatesFilter<"ecobot_ts_info_temp"> | number | null
    ctr_bat_v?: FloatNullableWithAggregatesFilter<"ecobot_ts_info_temp"> | number | null
    ctr_bat_c?: FloatNullableWithAggregatesFilter<"ecobot_ts_info_temp"> | number | null
    ctr_device_status?: IntNullableWithAggregatesFilter<"ecobot_ts_info_temp"> | number | null
    ctr_bat_status?: IntNullableWithAggregatesFilter<"ecobot_ts_info_temp"> | number | null
    ctr_bat_temp_status?: IntNullableWithAggregatesFilter<"ecobot_ts_info_temp"> | number | null
    ctr_solar_status?: IntNullableWithAggregatesFilter<"ecobot_ts_info_temp"> | number | null
    ctr_charging_status?: IntNullableWithAggregatesFilter<"ecobot_ts_info_temp"> | number | null
    robot_id?: StringWithAggregatesFilter<"ecobot_ts_info_temp"> | string
  }

  export type water_qualityWhereInput = {
    AND?: water_qualityWhereInput | water_qualityWhereInput[]
    OR?: water_qualityWhereInput[]
    NOT?: water_qualityWhereInput | water_qualityWhereInput[]
    timestamp?: DateTimeFilter<"water_quality"> | Date | string
    temp_deg_c?: FloatNullableFilter<"water_quality"> | number | null
    ph_units?: FloatNullableFilter<"water_quality"> | number | null
    depth_m?: FloatNullableFilter<"water_quality"> | number | null
    spcond_us_cm?: FloatNullableFilter<"water_quality"> | number | null
    turb_ntu?: FloatNullableFilter<"water_quality"> | number | null
    hdo_sat?: FloatNullableFilter<"water_quality"> | number | null
    hdo_mg_l?: FloatNullableFilter<"water_quality"> | number | null
    chl_ug_l?: FloatNullableFilter<"water_quality"> | number | null
    bg_ppb?: FloatNullableFilter<"water_quality"> | number | null
    ph_mv?: FloatNullableFilter<"water_quality"> | number | null
    salinity_psu?: FloatNullableFilter<"water_quality"> | number | null
    latitude?: FloatNullableFilter<"water_quality"> | number | null
    longitude?: FloatNullableFilter<"water_quality"> | number | null
    robot_id?: StringFilter<"water_quality"> | string
  }

  export type water_qualityOrderByWithRelationInput = {
    timestamp?: SortOrder
    temp_deg_c?: SortOrderInput | SortOrder
    ph_units?: SortOrderInput | SortOrder
    depth_m?: SortOrderInput | SortOrder
    spcond_us_cm?: SortOrderInput | SortOrder
    turb_ntu?: SortOrderInput | SortOrder
    hdo_sat?: SortOrderInput | SortOrder
    hdo_mg_l?: SortOrderInput | SortOrder
    chl_ug_l?: SortOrderInput | SortOrder
    bg_ppb?: SortOrderInput | SortOrder
    ph_mv?: SortOrderInput | SortOrder
    salinity_psu?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    robot_id?: SortOrder
  }

  export type water_qualityWhereUniqueInput = Prisma.AtLeast<{
    robot_id_timestamp?: water_qualityRobot_idTimestampCompoundUniqueInput
    AND?: water_qualityWhereInput | water_qualityWhereInput[]
    OR?: water_qualityWhereInput[]
    NOT?: water_qualityWhereInput | water_qualityWhereInput[]
    timestamp?: DateTimeFilter<"water_quality"> | Date | string
    temp_deg_c?: FloatNullableFilter<"water_quality"> | number | null
    ph_units?: FloatNullableFilter<"water_quality"> | number | null
    depth_m?: FloatNullableFilter<"water_quality"> | number | null
    spcond_us_cm?: FloatNullableFilter<"water_quality"> | number | null
    turb_ntu?: FloatNullableFilter<"water_quality"> | number | null
    hdo_sat?: FloatNullableFilter<"water_quality"> | number | null
    hdo_mg_l?: FloatNullableFilter<"water_quality"> | number | null
    chl_ug_l?: FloatNullableFilter<"water_quality"> | number | null
    bg_ppb?: FloatNullableFilter<"water_quality"> | number | null
    ph_mv?: FloatNullableFilter<"water_quality"> | number | null
    salinity_psu?: FloatNullableFilter<"water_quality"> | number | null
    latitude?: FloatNullableFilter<"water_quality"> | number | null
    longitude?: FloatNullableFilter<"water_quality"> | number | null
    robot_id?: StringFilter<"water_quality"> | string
  }, "robot_id_timestamp">

  export type water_qualityOrderByWithAggregationInput = {
    timestamp?: SortOrder
    temp_deg_c?: SortOrderInput | SortOrder
    ph_units?: SortOrderInput | SortOrder
    depth_m?: SortOrderInput | SortOrder
    spcond_us_cm?: SortOrderInput | SortOrder
    turb_ntu?: SortOrderInput | SortOrder
    hdo_sat?: SortOrderInput | SortOrder
    hdo_mg_l?: SortOrderInput | SortOrder
    chl_ug_l?: SortOrderInput | SortOrder
    bg_ppb?: SortOrderInput | SortOrder
    ph_mv?: SortOrderInput | SortOrder
    salinity_psu?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    robot_id?: SortOrder
    _count?: water_qualityCountOrderByAggregateInput
    _avg?: water_qualityAvgOrderByAggregateInput
    _max?: water_qualityMaxOrderByAggregateInput
    _min?: water_qualityMinOrderByAggregateInput
    _sum?: water_qualitySumOrderByAggregateInput
  }

  export type water_qualityScalarWhereWithAggregatesInput = {
    AND?: water_qualityScalarWhereWithAggregatesInput | water_qualityScalarWhereWithAggregatesInput[]
    OR?: water_qualityScalarWhereWithAggregatesInput[]
    NOT?: water_qualityScalarWhereWithAggregatesInput | water_qualityScalarWhereWithAggregatesInput[]
    timestamp?: DateTimeWithAggregatesFilter<"water_quality"> | Date | string
    temp_deg_c?: FloatNullableWithAggregatesFilter<"water_quality"> | number | null
    ph_units?: FloatNullableWithAggregatesFilter<"water_quality"> | number | null
    depth_m?: FloatNullableWithAggregatesFilter<"water_quality"> | number | null
    spcond_us_cm?: FloatNullableWithAggregatesFilter<"water_quality"> | number | null
    turb_ntu?: FloatNullableWithAggregatesFilter<"water_quality"> | number | null
    hdo_sat?: FloatNullableWithAggregatesFilter<"water_quality"> | number | null
    hdo_mg_l?: FloatNullableWithAggregatesFilter<"water_quality"> | number | null
    chl_ug_l?: FloatNullableWithAggregatesFilter<"water_quality"> | number | null
    bg_ppb?: FloatNullableWithAggregatesFilter<"water_quality"> | number | null
    ph_mv?: FloatNullableWithAggregatesFilter<"water_quality"> | number | null
    salinity_psu?: FloatNullableWithAggregatesFilter<"water_quality"> | number | null
    latitude?: FloatNullableWithAggregatesFilter<"water_quality"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"water_quality"> | number | null
    robot_id?: StringWithAggregatesFilter<"water_quality"> | string
  }

  export type water_quality_tempWhereInput = {
    AND?: water_quality_tempWhereInput | water_quality_tempWhereInput[]
    OR?: water_quality_tempWhereInput[]
    NOT?: water_quality_tempWhereInput | water_quality_tempWhereInput[]
    timestamp?: DateTimeFilter<"water_quality_temp"> | Date | string
    temp_deg_c?: FloatNullableFilter<"water_quality_temp"> | number | null
    ph_units?: FloatNullableFilter<"water_quality_temp"> | number | null
    depth_m?: FloatNullableFilter<"water_quality_temp"> | number | null
    spcond_us_cm?: FloatNullableFilter<"water_quality_temp"> | number | null
    turb_ntu?: FloatNullableFilter<"water_quality_temp"> | number | null
    hdo_sat?: FloatNullableFilter<"water_quality_temp"> | number | null
    hdo_mg_l?: FloatNullableFilter<"water_quality_temp"> | number | null
    chl_ug_l?: FloatNullableFilter<"water_quality_temp"> | number | null
    bg_ppb?: FloatNullableFilter<"water_quality_temp"> | number | null
    ph_mv?: FloatNullableFilter<"water_quality_temp"> | number | null
    salinity_psu?: FloatNullableFilter<"water_quality_temp"> | number | null
    latitude?: FloatNullableFilter<"water_quality_temp"> | number | null
    longitude?: FloatNullableFilter<"water_quality_temp"> | number | null
    robot_id?: StringFilter<"water_quality_temp"> | string
  }

  export type water_quality_tempOrderByWithRelationInput = {
    timestamp?: SortOrder
    temp_deg_c?: SortOrderInput | SortOrder
    ph_units?: SortOrderInput | SortOrder
    depth_m?: SortOrderInput | SortOrder
    spcond_us_cm?: SortOrderInput | SortOrder
    turb_ntu?: SortOrderInput | SortOrder
    hdo_sat?: SortOrderInput | SortOrder
    hdo_mg_l?: SortOrderInput | SortOrder
    chl_ug_l?: SortOrderInput | SortOrder
    bg_ppb?: SortOrderInput | SortOrder
    ph_mv?: SortOrderInput | SortOrder
    salinity_psu?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    robot_id?: SortOrder
  }

  export type water_quality_tempWhereUniqueInput = Prisma.AtLeast<{
    robot_id_timestamp?: water_quality_tempRobot_idTimestampCompoundUniqueInput
    AND?: water_quality_tempWhereInput | water_quality_tempWhereInput[]
    OR?: water_quality_tempWhereInput[]
    NOT?: water_quality_tempWhereInput | water_quality_tempWhereInput[]
    timestamp?: DateTimeFilter<"water_quality_temp"> | Date | string
    temp_deg_c?: FloatNullableFilter<"water_quality_temp"> | number | null
    ph_units?: FloatNullableFilter<"water_quality_temp"> | number | null
    depth_m?: FloatNullableFilter<"water_quality_temp"> | number | null
    spcond_us_cm?: FloatNullableFilter<"water_quality_temp"> | number | null
    turb_ntu?: FloatNullableFilter<"water_quality_temp"> | number | null
    hdo_sat?: FloatNullableFilter<"water_quality_temp"> | number | null
    hdo_mg_l?: FloatNullableFilter<"water_quality_temp"> | number | null
    chl_ug_l?: FloatNullableFilter<"water_quality_temp"> | number | null
    bg_ppb?: FloatNullableFilter<"water_quality_temp"> | number | null
    ph_mv?: FloatNullableFilter<"water_quality_temp"> | number | null
    salinity_psu?: FloatNullableFilter<"water_quality_temp"> | number | null
    latitude?: FloatNullableFilter<"water_quality_temp"> | number | null
    longitude?: FloatNullableFilter<"water_quality_temp"> | number | null
    robot_id?: StringFilter<"water_quality_temp"> | string
  }, "robot_id_timestamp">

  export type water_quality_tempOrderByWithAggregationInput = {
    timestamp?: SortOrder
    temp_deg_c?: SortOrderInput | SortOrder
    ph_units?: SortOrderInput | SortOrder
    depth_m?: SortOrderInput | SortOrder
    spcond_us_cm?: SortOrderInput | SortOrder
    turb_ntu?: SortOrderInput | SortOrder
    hdo_sat?: SortOrderInput | SortOrder
    hdo_mg_l?: SortOrderInput | SortOrder
    chl_ug_l?: SortOrderInput | SortOrder
    bg_ppb?: SortOrderInput | SortOrder
    ph_mv?: SortOrderInput | SortOrder
    salinity_psu?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    robot_id?: SortOrder
    _count?: water_quality_tempCountOrderByAggregateInput
    _avg?: water_quality_tempAvgOrderByAggregateInput
    _max?: water_quality_tempMaxOrderByAggregateInput
    _min?: water_quality_tempMinOrderByAggregateInput
    _sum?: water_quality_tempSumOrderByAggregateInput
  }

  export type water_quality_tempScalarWhereWithAggregatesInput = {
    AND?: water_quality_tempScalarWhereWithAggregatesInput | water_quality_tempScalarWhereWithAggregatesInput[]
    OR?: water_quality_tempScalarWhereWithAggregatesInput[]
    NOT?: water_quality_tempScalarWhereWithAggregatesInput | water_quality_tempScalarWhereWithAggregatesInput[]
    timestamp?: DateTimeWithAggregatesFilter<"water_quality_temp"> | Date | string
    temp_deg_c?: FloatNullableWithAggregatesFilter<"water_quality_temp"> | number | null
    ph_units?: FloatNullableWithAggregatesFilter<"water_quality_temp"> | number | null
    depth_m?: FloatNullableWithAggregatesFilter<"water_quality_temp"> | number | null
    spcond_us_cm?: FloatNullableWithAggregatesFilter<"water_quality_temp"> | number | null
    turb_ntu?: FloatNullableWithAggregatesFilter<"water_quality_temp"> | number | null
    hdo_sat?: FloatNullableWithAggregatesFilter<"water_quality_temp"> | number | null
    hdo_mg_l?: FloatNullableWithAggregatesFilter<"water_quality_temp"> | number | null
    chl_ug_l?: FloatNullableWithAggregatesFilter<"water_quality_temp"> | number | null
    bg_ppb?: FloatNullableWithAggregatesFilter<"water_quality_temp"> | number | null
    ph_mv?: FloatNullableWithAggregatesFilter<"water_quality_temp"> | number | null
    salinity_psu?: FloatNullableWithAggregatesFilter<"water_quality_temp"> | number | null
    latitude?: FloatNullableWithAggregatesFilter<"water_quality_temp"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"water_quality_temp"> | number | null
    robot_id?: StringWithAggregatesFilter<"water_quality_temp"> | string
  }

  export type ecobot_statusCreateInput = {
    timestamp: Date | string
    latitude: number
    longitude: number
    depth_data?: number | null
    velocity?: number | null
    current_state?: number | null
    plc_status?: number | null
    pump_values?: ecobot_statusCreatepump_valuesInput | number[]
    ctr_pv_v?: number | null
    ctr_pv_c?: number | null
    ctr_bat_temp?: number | null
    ctr_device_temp?: number | null
    ctr_bat_soc?: number | null
    ctr_bat_max_v_today?: number | null
    ctr_bat_min_v_today?: number | null
    ctr_gen_energy_today?: number | null
    ctr_gen_energy_month?: number | null
    ctr_gen_energy_year?: number | null
    ctr_gen_energy_total?: number | null
    ctr_bat_v?: number | null
    ctr_bat_c?: number | null
    ctr_device_status?: number | null
    ctr_bat_status?: number | null
    ctr_bat_temp_status?: number | null
    ctr_solar_status?: number | null
    ctr_charging_status?: number | null
    robot_id: string
  }

  export type ecobot_statusUncheckedCreateInput = {
    timestamp: Date | string
    latitude: number
    longitude: number
    depth_data?: number | null
    velocity?: number | null
    current_state?: number | null
    plc_status?: number | null
    pump_values?: ecobot_statusCreatepump_valuesInput | number[]
    ctr_pv_v?: number | null
    ctr_pv_c?: number | null
    ctr_bat_temp?: number | null
    ctr_device_temp?: number | null
    ctr_bat_soc?: number | null
    ctr_bat_max_v_today?: number | null
    ctr_bat_min_v_today?: number | null
    ctr_gen_energy_today?: number | null
    ctr_gen_energy_month?: number | null
    ctr_gen_energy_year?: number | null
    ctr_gen_energy_total?: number | null
    ctr_bat_v?: number | null
    ctr_bat_c?: number | null
    ctr_device_status?: number | null
    ctr_bat_status?: number | null
    ctr_bat_temp_status?: number | null
    ctr_solar_status?: number | null
    ctr_charging_status?: number | null
    robot_id: string
  }

  export type ecobot_statusUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    depth_data?: NullableFloatFieldUpdateOperationsInput | number | null
    velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    current_state?: NullableIntFieldUpdateOperationsInput | number | null
    plc_status?: NullableIntFieldUpdateOperationsInput | number | null
    pump_values?: ecobot_statusUpdatepump_valuesInput | number[]
    ctr_pv_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_pv_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_temp?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_device_temp?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_soc?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_max_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_min_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_month?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_year?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_total?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_device_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_temp_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_solar_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_charging_status?: NullableIntFieldUpdateOperationsInput | number | null
    robot_id?: StringFieldUpdateOperationsInput | string
  }

  export type ecobot_statusUncheckedUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    depth_data?: NullableFloatFieldUpdateOperationsInput | number | null
    velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    current_state?: NullableIntFieldUpdateOperationsInput | number | null
    plc_status?: NullableIntFieldUpdateOperationsInput | number | null
    pump_values?: ecobot_statusUpdatepump_valuesInput | number[]
    ctr_pv_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_pv_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_temp?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_device_temp?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_soc?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_max_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_min_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_month?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_year?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_total?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_device_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_temp_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_solar_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_charging_status?: NullableIntFieldUpdateOperationsInput | number | null
    robot_id?: StringFieldUpdateOperationsInput | string
  }

  export type ecobot_statusCreateManyInput = {
    timestamp: Date | string
    latitude: number
    longitude: number
    depth_data?: number | null
    velocity?: number | null
    current_state?: number | null
    plc_status?: number | null
    pump_values?: ecobot_statusCreatepump_valuesInput | number[]
    ctr_pv_v?: number | null
    ctr_pv_c?: number | null
    ctr_bat_temp?: number | null
    ctr_device_temp?: number | null
    ctr_bat_soc?: number | null
    ctr_bat_max_v_today?: number | null
    ctr_bat_min_v_today?: number | null
    ctr_gen_energy_today?: number | null
    ctr_gen_energy_month?: number | null
    ctr_gen_energy_year?: number | null
    ctr_gen_energy_total?: number | null
    ctr_bat_v?: number | null
    ctr_bat_c?: number | null
    ctr_device_status?: number | null
    ctr_bat_status?: number | null
    ctr_bat_temp_status?: number | null
    ctr_solar_status?: number | null
    ctr_charging_status?: number | null
    robot_id: string
  }

  export type ecobot_statusUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    depth_data?: NullableFloatFieldUpdateOperationsInput | number | null
    velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    current_state?: NullableIntFieldUpdateOperationsInput | number | null
    plc_status?: NullableIntFieldUpdateOperationsInput | number | null
    pump_values?: ecobot_statusUpdatepump_valuesInput | number[]
    ctr_pv_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_pv_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_temp?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_device_temp?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_soc?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_max_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_min_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_month?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_year?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_total?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_device_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_temp_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_solar_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_charging_status?: NullableIntFieldUpdateOperationsInput | number | null
    robot_id?: StringFieldUpdateOperationsInput | string
  }

  export type ecobot_statusUncheckedUpdateManyInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    depth_data?: NullableFloatFieldUpdateOperationsInput | number | null
    velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    current_state?: NullableIntFieldUpdateOperationsInput | number | null
    plc_status?: NullableIntFieldUpdateOperationsInput | number | null
    pump_values?: ecobot_statusUpdatepump_valuesInput | number[]
    ctr_pv_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_pv_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_temp?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_device_temp?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_soc?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_max_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_min_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_month?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_year?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_total?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_device_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_temp_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_solar_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_charging_status?: NullableIntFieldUpdateOperationsInput | number | null
    robot_id?: StringFieldUpdateOperationsInput | string
  }

  export type ecobot_status_tempCreateInput = {
    timestamp: Date | string
    latitude: number
    longitude: number
    yaw?: number | null
    current_angular_vel?: number | null
    bearing?: number | null
    distance?: number | null
    course_goal_distance_threshold?: number | null
    holding_goal_distance_threshold?: number | null
    course_min_velocity?: number | null
    holding_min_velocity?: number | null
    course_min_ang_velocity?: number | null
    holding_min_ang_velocity?: number | null
    bearing_diff?: number | null
    depth_data?: number | null
    velocity?: number | null
    velocity_direction?: number | null
    current_state?: number | null
    current_course_state?: number | null
    plc_status?: number | null
    motor_values?: ecobot_status_tempCreatemotor_valuesInput | number[]
    pump_values?: ecobot_status_tempCreatepump_valuesInput | number[]
    ctr_pv_v?: number | null
    ctr_pv_c?: number | null
    ctr_bat_temp?: number | null
    ctr_device_temp?: number | null
    ctr_bat_soc?: number | null
    ctr_bat_max_v_today?: number | null
    ctr_bat_min_v_today?: number | null
    ctr_gen_energy_today?: number | null
    ctr_gen_energy_month?: number | null
    ctr_gen_energy_year?: number | null
    ctr_gen_energy_total?: number | null
    ctr_bat_v?: number | null
    ctr_bat_c?: number | null
    ctr_device_status?: number | null
    ctr_bat_status?: number | null
    ctr_bat_temp_status?: number | null
    ctr_solar_status?: number | null
    ctr_charging_status?: number | null
    other_values?: ecobot_status_tempCreateother_valuesInput | number[]
    current_speeds?: ecobot_status_tempCreatecurrent_speedsInput | number[]
    robot_id: string
  }

  export type ecobot_status_tempUncheckedCreateInput = {
    timestamp: Date | string
    latitude: number
    longitude: number
    yaw?: number | null
    current_angular_vel?: number | null
    bearing?: number | null
    distance?: number | null
    course_goal_distance_threshold?: number | null
    holding_goal_distance_threshold?: number | null
    course_min_velocity?: number | null
    holding_min_velocity?: number | null
    course_min_ang_velocity?: number | null
    holding_min_ang_velocity?: number | null
    bearing_diff?: number | null
    depth_data?: number | null
    velocity?: number | null
    velocity_direction?: number | null
    current_state?: number | null
    current_course_state?: number | null
    plc_status?: number | null
    motor_values?: ecobot_status_tempCreatemotor_valuesInput | number[]
    pump_values?: ecobot_status_tempCreatepump_valuesInput | number[]
    ctr_pv_v?: number | null
    ctr_pv_c?: number | null
    ctr_bat_temp?: number | null
    ctr_device_temp?: number | null
    ctr_bat_soc?: number | null
    ctr_bat_max_v_today?: number | null
    ctr_bat_min_v_today?: number | null
    ctr_gen_energy_today?: number | null
    ctr_gen_energy_month?: number | null
    ctr_gen_energy_year?: number | null
    ctr_gen_energy_total?: number | null
    ctr_bat_v?: number | null
    ctr_bat_c?: number | null
    ctr_device_status?: number | null
    ctr_bat_status?: number | null
    ctr_bat_temp_status?: number | null
    ctr_solar_status?: number | null
    ctr_charging_status?: number | null
    other_values?: ecobot_status_tempCreateother_valuesInput | number[]
    current_speeds?: ecobot_status_tempCreatecurrent_speedsInput | number[]
    robot_id: string
  }

  export type ecobot_status_tempUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    yaw?: NullableFloatFieldUpdateOperationsInput | number | null
    current_angular_vel?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    course_goal_distance_threshold?: NullableFloatFieldUpdateOperationsInput | number | null
    holding_goal_distance_threshold?: NullableFloatFieldUpdateOperationsInput | number | null
    course_min_velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    holding_min_velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    course_min_ang_velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    holding_min_ang_velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing_diff?: NullableFloatFieldUpdateOperationsInput | number | null
    depth_data?: NullableFloatFieldUpdateOperationsInput | number | null
    velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    velocity_direction?: NullableFloatFieldUpdateOperationsInput | number | null
    current_state?: NullableIntFieldUpdateOperationsInput | number | null
    current_course_state?: NullableIntFieldUpdateOperationsInput | number | null
    plc_status?: NullableIntFieldUpdateOperationsInput | number | null
    motor_values?: ecobot_status_tempUpdatemotor_valuesInput | number[]
    pump_values?: ecobot_status_tempUpdatepump_valuesInput | number[]
    ctr_pv_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_pv_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_temp?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_device_temp?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_soc?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_max_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_min_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_month?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_year?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_total?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_device_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_temp_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_solar_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_charging_status?: NullableIntFieldUpdateOperationsInput | number | null
    other_values?: ecobot_status_tempUpdateother_valuesInput | number[]
    current_speeds?: ecobot_status_tempUpdatecurrent_speedsInput | number[]
    robot_id?: StringFieldUpdateOperationsInput | string
  }

  export type ecobot_status_tempUncheckedUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    yaw?: NullableFloatFieldUpdateOperationsInput | number | null
    current_angular_vel?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    course_goal_distance_threshold?: NullableFloatFieldUpdateOperationsInput | number | null
    holding_goal_distance_threshold?: NullableFloatFieldUpdateOperationsInput | number | null
    course_min_velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    holding_min_velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    course_min_ang_velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    holding_min_ang_velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing_diff?: NullableFloatFieldUpdateOperationsInput | number | null
    depth_data?: NullableFloatFieldUpdateOperationsInput | number | null
    velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    velocity_direction?: NullableFloatFieldUpdateOperationsInput | number | null
    current_state?: NullableIntFieldUpdateOperationsInput | number | null
    current_course_state?: NullableIntFieldUpdateOperationsInput | number | null
    plc_status?: NullableIntFieldUpdateOperationsInput | number | null
    motor_values?: ecobot_status_tempUpdatemotor_valuesInput | number[]
    pump_values?: ecobot_status_tempUpdatepump_valuesInput | number[]
    ctr_pv_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_pv_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_temp?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_device_temp?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_soc?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_max_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_min_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_month?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_year?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_total?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_device_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_temp_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_solar_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_charging_status?: NullableIntFieldUpdateOperationsInput | number | null
    other_values?: ecobot_status_tempUpdateother_valuesInput | number[]
    current_speeds?: ecobot_status_tempUpdatecurrent_speedsInput | number[]
    robot_id?: StringFieldUpdateOperationsInput | string
  }

  export type ecobot_status_tempCreateManyInput = {
    timestamp: Date | string
    latitude: number
    longitude: number
    yaw?: number | null
    current_angular_vel?: number | null
    bearing?: number | null
    distance?: number | null
    course_goal_distance_threshold?: number | null
    holding_goal_distance_threshold?: number | null
    course_min_velocity?: number | null
    holding_min_velocity?: number | null
    course_min_ang_velocity?: number | null
    holding_min_ang_velocity?: number | null
    bearing_diff?: number | null
    depth_data?: number | null
    velocity?: number | null
    velocity_direction?: number | null
    current_state?: number | null
    current_course_state?: number | null
    plc_status?: number | null
    motor_values?: ecobot_status_tempCreatemotor_valuesInput | number[]
    pump_values?: ecobot_status_tempCreatepump_valuesInput | number[]
    ctr_pv_v?: number | null
    ctr_pv_c?: number | null
    ctr_bat_temp?: number | null
    ctr_device_temp?: number | null
    ctr_bat_soc?: number | null
    ctr_bat_max_v_today?: number | null
    ctr_bat_min_v_today?: number | null
    ctr_gen_energy_today?: number | null
    ctr_gen_energy_month?: number | null
    ctr_gen_energy_year?: number | null
    ctr_gen_energy_total?: number | null
    ctr_bat_v?: number | null
    ctr_bat_c?: number | null
    ctr_device_status?: number | null
    ctr_bat_status?: number | null
    ctr_bat_temp_status?: number | null
    ctr_solar_status?: number | null
    ctr_charging_status?: number | null
    other_values?: ecobot_status_tempCreateother_valuesInput | number[]
    current_speeds?: ecobot_status_tempCreatecurrent_speedsInput | number[]
    robot_id: string
  }

  export type ecobot_status_tempUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    yaw?: NullableFloatFieldUpdateOperationsInput | number | null
    current_angular_vel?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    course_goal_distance_threshold?: NullableFloatFieldUpdateOperationsInput | number | null
    holding_goal_distance_threshold?: NullableFloatFieldUpdateOperationsInput | number | null
    course_min_velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    holding_min_velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    course_min_ang_velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    holding_min_ang_velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing_diff?: NullableFloatFieldUpdateOperationsInput | number | null
    depth_data?: NullableFloatFieldUpdateOperationsInput | number | null
    velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    velocity_direction?: NullableFloatFieldUpdateOperationsInput | number | null
    current_state?: NullableIntFieldUpdateOperationsInput | number | null
    current_course_state?: NullableIntFieldUpdateOperationsInput | number | null
    plc_status?: NullableIntFieldUpdateOperationsInput | number | null
    motor_values?: ecobot_status_tempUpdatemotor_valuesInput | number[]
    pump_values?: ecobot_status_tempUpdatepump_valuesInput | number[]
    ctr_pv_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_pv_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_temp?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_device_temp?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_soc?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_max_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_min_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_month?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_year?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_total?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_device_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_temp_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_solar_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_charging_status?: NullableIntFieldUpdateOperationsInput | number | null
    other_values?: ecobot_status_tempUpdateother_valuesInput | number[]
    current_speeds?: ecobot_status_tempUpdatecurrent_speedsInput | number[]
    robot_id?: StringFieldUpdateOperationsInput | string
  }

  export type ecobot_status_tempUncheckedUpdateManyInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    yaw?: NullableFloatFieldUpdateOperationsInput | number | null
    current_angular_vel?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    course_goal_distance_threshold?: NullableFloatFieldUpdateOperationsInput | number | null
    holding_goal_distance_threshold?: NullableFloatFieldUpdateOperationsInput | number | null
    course_min_velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    holding_min_velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    course_min_ang_velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    holding_min_ang_velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing_diff?: NullableFloatFieldUpdateOperationsInput | number | null
    depth_data?: NullableFloatFieldUpdateOperationsInput | number | null
    velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    velocity_direction?: NullableFloatFieldUpdateOperationsInput | number | null
    current_state?: NullableIntFieldUpdateOperationsInput | number | null
    current_course_state?: NullableIntFieldUpdateOperationsInput | number | null
    plc_status?: NullableIntFieldUpdateOperationsInput | number | null
    motor_values?: ecobot_status_tempUpdatemotor_valuesInput | number[]
    pump_values?: ecobot_status_tempUpdatepump_valuesInput | number[]
    ctr_pv_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_pv_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_temp?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_device_temp?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_soc?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_max_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_min_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_month?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_year?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_total?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_device_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_temp_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_solar_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_charging_status?: NullableIntFieldUpdateOperationsInput | number | null
    other_values?: ecobot_status_tempUpdateother_valuesInput | number[]
    current_speeds?: ecobot_status_tempUpdatecurrent_speedsInput | number[]
    robot_id?: StringFieldUpdateOperationsInput | string
  }

  export type ecobot_ts_infoCreateInput = {
    timestamp: Date | string
    latitude: number
    longitude: number
    plc_status?: number | null
    ctr_pv_v?: number | null
    ctr_pv_c?: number | null
    ctr_bat_soc?: number | null
    ctr_bat_max_v_today?: number | null
    ctr_bat_min_v_today?: number | null
    ctr_gen_energy_today?: number | null
    ctr_gen_energy_month?: number | null
    ctr_gen_energy_year?: number | null
    ctr_gen_energy_total?: number | null
    ctr_bat_v?: number | null
    ctr_bat_c?: number | null
    ctr_device_status?: number | null
    ctr_bat_status?: number | null
    ctr_bat_temp_status?: number | null
    ctr_solar_status?: number | null
    ctr_charging_status?: number | null
    robot_id: string
  }

  export type ecobot_ts_infoUncheckedCreateInput = {
    timestamp: Date | string
    latitude: number
    longitude: number
    plc_status?: number | null
    ctr_pv_v?: number | null
    ctr_pv_c?: number | null
    ctr_bat_soc?: number | null
    ctr_bat_max_v_today?: number | null
    ctr_bat_min_v_today?: number | null
    ctr_gen_energy_today?: number | null
    ctr_gen_energy_month?: number | null
    ctr_gen_energy_year?: number | null
    ctr_gen_energy_total?: number | null
    ctr_bat_v?: number | null
    ctr_bat_c?: number | null
    ctr_device_status?: number | null
    ctr_bat_status?: number | null
    ctr_bat_temp_status?: number | null
    ctr_solar_status?: number | null
    ctr_charging_status?: number | null
    robot_id: string
  }

  export type ecobot_ts_infoUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    plc_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_pv_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_pv_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_soc?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_max_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_min_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_month?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_year?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_total?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_device_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_temp_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_solar_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_charging_status?: NullableIntFieldUpdateOperationsInput | number | null
    robot_id?: StringFieldUpdateOperationsInput | string
  }

  export type ecobot_ts_infoUncheckedUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    plc_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_pv_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_pv_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_soc?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_max_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_min_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_month?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_year?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_total?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_device_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_temp_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_solar_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_charging_status?: NullableIntFieldUpdateOperationsInput | number | null
    robot_id?: StringFieldUpdateOperationsInput | string
  }

  export type ecobot_ts_infoCreateManyInput = {
    timestamp: Date | string
    latitude: number
    longitude: number
    plc_status?: number | null
    ctr_pv_v?: number | null
    ctr_pv_c?: number | null
    ctr_bat_soc?: number | null
    ctr_bat_max_v_today?: number | null
    ctr_bat_min_v_today?: number | null
    ctr_gen_energy_today?: number | null
    ctr_gen_energy_month?: number | null
    ctr_gen_energy_year?: number | null
    ctr_gen_energy_total?: number | null
    ctr_bat_v?: number | null
    ctr_bat_c?: number | null
    ctr_device_status?: number | null
    ctr_bat_status?: number | null
    ctr_bat_temp_status?: number | null
    ctr_solar_status?: number | null
    ctr_charging_status?: number | null
    robot_id: string
  }

  export type ecobot_ts_infoUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    plc_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_pv_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_pv_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_soc?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_max_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_min_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_month?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_year?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_total?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_device_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_temp_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_solar_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_charging_status?: NullableIntFieldUpdateOperationsInput | number | null
    robot_id?: StringFieldUpdateOperationsInput | string
  }

  export type ecobot_ts_infoUncheckedUpdateManyInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    plc_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_pv_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_pv_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_soc?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_max_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_min_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_month?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_year?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_total?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_device_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_temp_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_solar_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_charging_status?: NullableIntFieldUpdateOperationsInput | number | null
    robot_id?: StringFieldUpdateOperationsInput | string
  }

  export type ecobot_ts_info_tempCreateInput = {
    timestamp: Date | string
    latitude: number
    longitude: number
    plc_status?: number | null
    ctr_pv_v?: number | null
    ctr_pv_c?: number | null
    ctr_bat_soc?: number | null
    ctr_bat_max_v_today?: number | null
    ctr_bat_min_v_today?: number | null
    ctr_gen_energy_today?: number | null
    ctr_gen_energy_month?: number | null
    ctr_gen_energy_year?: number | null
    ctr_gen_energy_total?: number | null
    ctr_bat_v?: number | null
    ctr_bat_c?: number | null
    ctr_device_status?: number | null
    ctr_bat_status?: number | null
    ctr_bat_temp_status?: number | null
    ctr_solar_status?: number | null
    ctr_charging_status?: number | null
    robot_id: string
  }

  export type ecobot_ts_info_tempUncheckedCreateInput = {
    timestamp: Date | string
    latitude: number
    longitude: number
    plc_status?: number | null
    ctr_pv_v?: number | null
    ctr_pv_c?: number | null
    ctr_bat_soc?: number | null
    ctr_bat_max_v_today?: number | null
    ctr_bat_min_v_today?: number | null
    ctr_gen_energy_today?: number | null
    ctr_gen_energy_month?: number | null
    ctr_gen_energy_year?: number | null
    ctr_gen_energy_total?: number | null
    ctr_bat_v?: number | null
    ctr_bat_c?: number | null
    ctr_device_status?: number | null
    ctr_bat_status?: number | null
    ctr_bat_temp_status?: number | null
    ctr_solar_status?: number | null
    ctr_charging_status?: number | null
    robot_id: string
  }

  export type ecobot_ts_info_tempUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    plc_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_pv_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_pv_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_soc?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_max_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_min_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_month?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_year?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_total?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_device_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_temp_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_solar_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_charging_status?: NullableIntFieldUpdateOperationsInput | number | null
    robot_id?: StringFieldUpdateOperationsInput | string
  }

  export type ecobot_ts_info_tempUncheckedUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    plc_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_pv_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_pv_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_soc?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_max_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_min_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_month?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_year?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_total?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_device_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_temp_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_solar_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_charging_status?: NullableIntFieldUpdateOperationsInput | number | null
    robot_id?: StringFieldUpdateOperationsInput | string
  }

  export type ecobot_ts_info_tempCreateManyInput = {
    timestamp: Date | string
    latitude: number
    longitude: number
    plc_status?: number | null
    ctr_pv_v?: number | null
    ctr_pv_c?: number | null
    ctr_bat_soc?: number | null
    ctr_bat_max_v_today?: number | null
    ctr_bat_min_v_today?: number | null
    ctr_gen_energy_today?: number | null
    ctr_gen_energy_month?: number | null
    ctr_gen_energy_year?: number | null
    ctr_gen_energy_total?: number | null
    ctr_bat_v?: number | null
    ctr_bat_c?: number | null
    ctr_device_status?: number | null
    ctr_bat_status?: number | null
    ctr_bat_temp_status?: number | null
    ctr_solar_status?: number | null
    ctr_charging_status?: number | null
    robot_id: string
  }

  export type ecobot_ts_info_tempUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    plc_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_pv_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_pv_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_soc?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_max_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_min_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_month?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_year?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_total?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_device_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_temp_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_solar_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_charging_status?: NullableIntFieldUpdateOperationsInput | number | null
    robot_id?: StringFieldUpdateOperationsInput | string
  }

  export type ecobot_ts_info_tempUncheckedUpdateManyInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    plc_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_pv_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_pv_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_soc?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_max_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_min_v_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_today?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_month?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_year?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_gen_energy_total?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_v?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_bat_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ctr_device_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_bat_temp_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_solar_status?: NullableIntFieldUpdateOperationsInput | number | null
    ctr_charging_status?: NullableIntFieldUpdateOperationsInput | number | null
    robot_id?: StringFieldUpdateOperationsInput | string
  }

  export type water_qualityCreateInput = {
    timestamp: Date | string
    temp_deg_c?: number | null
    ph_units?: number | null
    depth_m?: number | null
    spcond_us_cm?: number | null
    turb_ntu?: number | null
    hdo_sat?: number | null
    hdo_mg_l?: number | null
    chl_ug_l?: number | null
    bg_ppb?: number | null
    ph_mv?: number | null
    salinity_psu?: number | null
    latitude?: number | null
    longitude?: number | null
    robot_id: string
  }

  export type water_qualityUncheckedCreateInput = {
    timestamp: Date | string
    temp_deg_c?: number | null
    ph_units?: number | null
    depth_m?: number | null
    spcond_us_cm?: number | null
    turb_ntu?: number | null
    hdo_sat?: number | null
    hdo_mg_l?: number | null
    chl_ug_l?: number | null
    bg_ppb?: number | null
    ph_mv?: number | null
    salinity_psu?: number | null
    latitude?: number | null
    longitude?: number | null
    robot_id: string
  }

  export type water_qualityUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    temp_deg_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ph_units?: NullableFloatFieldUpdateOperationsInput | number | null
    depth_m?: NullableFloatFieldUpdateOperationsInput | number | null
    spcond_us_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    turb_ntu?: NullableFloatFieldUpdateOperationsInput | number | null
    hdo_sat?: NullableFloatFieldUpdateOperationsInput | number | null
    hdo_mg_l?: NullableFloatFieldUpdateOperationsInput | number | null
    chl_ug_l?: NullableFloatFieldUpdateOperationsInput | number | null
    bg_ppb?: NullableFloatFieldUpdateOperationsInput | number | null
    ph_mv?: NullableFloatFieldUpdateOperationsInput | number | null
    salinity_psu?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    robot_id?: StringFieldUpdateOperationsInput | string
  }

  export type water_qualityUncheckedUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    temp_deg_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ph_units?: NullableFloatFieldUpdateOperationsInput | number | null
    depth_m?: NullableFloatFieldUpdateOperationsInput | number | null
    spcond_us_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    turb_ntu?: NullableFloatFieldUpdateOperationsInput | number | null
    hdo_sat?: NullableFloatFieldUpdateOperationsInput | number | null
    hdo_mg_l?: NullableFloatFieldUpdateOperationsInput | number | null
    chl_ug_l?: NullableFloatFieldUpdateOperationsInput | number | null
    bg_ppb?: NullableFloatFieldUpdateOperationsInput | number | null
    ph_mv?: NullableFloatFieldUpdateOperationsInput | number | null
    salinity_psu?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    robot_id?: StringFieldUpdateOperationsInput | string
  }

  export type water_qualityCreateManyInput = {
    timestamp: Date | string
    temp_deg_c?: number | null
    ph_units?: number | null
    depth_m?: number | null
    spcond_us_cm?: number | null
    turb_ntu?: number | null
    hdo_sat?: number | null
    hdo_mg_l?: number | null
    chl_ug_l?: number | null
    bg_ppb?: number | null
    ph_mv?: number | null
    salinity_psu?: number | null
    latitude?: number | null
    longitude?: number | null
    robot_id: string
  }

  export type water_qualityUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    temp_deg_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ph_units?: NullableFloatFieldUpdateOperationsInput | number | null
    depth_m?: NullableFloatFieldUpdateOperationsInput | number | null
    spcond_us_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    turb_ntu?: NullableFloatFieldUpdateOperationsInput | number | null
    hdo_sat?: NullableFloatFieldUpdateOperationsInput | number | null
    hdo_mg_l?: NullableFloatFieldUpdateOperationsInput | number | null
    chl_ug_l?: NullableFloatFieldUpdateOperationsInput | number | null
    bg_ppb?: NullableFloatFieldUpdateOperationsInput | number | null
    ph_mv?: NullableFloatFieldUpdateOperationsInput | number | null
    salinity_psu?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    robot_id?: StringFieldUpdateOperationsInput | string
  }

  export type water_qualityUncheckedUpdateManyInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    temp_deg_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ph_units?: NullableFloatFieldUpdateOperationsInput | number | null
    depth_m?: NullableFloatFieldUpdateOperationsInput | number | null
    spcond_us_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    turb_ntu?: NullableFloatFieldUpdateOperationsInput | number | null
    hdo_sat?: NullableFloatFieldUpdateOperationsInput | number | null
    hdo_mg_l?: NullableFloatFieldUpdateOperationsInput | number | null
    chl_ug_l?: NullableFloatFieldUpdateOperationsInput | number | null
    bg_ppb?: NullableFloatFieldUpdateOperationsInput | number | null
    ph_mv?: NullableFloatFieldUpdateOperationsInput | number | null
    salinity_psu?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    robot_id?: StringFieldUpdateOperationsInput | string
  }

  export type water_quality_tempCreateInput = {
    timestamp: Date | string
    temp_deg_c?: number | null
    ph_units?: number | null
    depth_m?: number | null
    spcond_us_cm?: number | null
    turb_ntu?: number | null
    hdo_sat?: number | null
    hdo_mg_l?: number | null
    chl_ug_l?: number | null
    bg_ppb?: number | null
    ph_mv?: number | null
    salinity_psu?: number | null
    latitude?: number | null
    longitude?: number | null
    robot_id: string
  }

  export type water_quality_tempUncheckedCreateInput = {
    timestamp: Date | string
    temp_deg_c?: number | null
    ph_units?: number | null
    depth_m?: number | null
    spcond_us_cm?: number | null
    turb_ntu?: number | null
    hdo_sat?: number | null
    hdo_mg_l?: number | null
    chl_ug_l?: number | null
    bg_ppb?: number | null
    ph_mv?: number | null
    salinity_psu?: number | null
    latitude?: number | null
    longitude?: number | null
    robot_id: string
  }

  export type water_quality_tempUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    temp_deg_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ph_units?: NullableFloatFieldUpdateOperationsInput | number | null
    depth_m?: NullableFloatFieldUpdateOperationsInput | number | null
    spcond_us_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    turb_ntu?: NullableFloatFieldUpdateOperationsInput | number | null
    hdo_sat?: NullableFloatFieldUpdateOperationsInput | number | null
    hdo_mg_l?: NullableFloatFieldUpdateOperationsInput | number | null
    chl_ug_l?: NullableFloatFieldUpdateOperationsInput | number | null
    bg_ppb?: NullableFloatFieldUpdateOperationsInput | number | null
    ph_mv?: NullableFloatFieldUpdateOperationsInput | number | null
    salinity_psu?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    robot_id?: StringFieldUpdateOperationsInput | string
  }

  export type water_quality_tempUncheckedUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    temp_deg_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ph_units?: NullableFloatFieldUpdateOperationsInput | number | null
    depth_m?: NullableFloatFieldUpdateOperationsInput | number | null
    spcond_us_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    turb_ntu?: NullableFloatFieldUpdateOperationsInput | number | null
    hdo_sat?: NullableFloatFieldUpdateOperationsInput | number | null
    hdo_mg_l?: NullableFloatFieldUpdateOperationsInput | number | null
    chl_ug_l?: NullableFloatFieldUpdateOperationsInput | number | null
    bg_ppb?: NullableFloatFieldUpdateOperationsInput | number | null
    ph_mv?: NullableFloatFieldUpdateOperationsInput | number | null
    salinity_psu?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    robot_id?: StringFieldUpdateOperationsInput | string
  }

  export type water_quality_tempCreateManyInput = {
    timestamp: Date | string
    temp_deg_c?: number | null
    ph_units?: number | null
    depth_m?: number | null
    spcond_us_cm?: number | null
    turb_ntu?: number | null
    hdo_sat?: number | null
    hdo_mg_l?: number | null
    chl_ug_l?: number | null
    bg_ppb?: number | null
    ph_mv?: number | null
    salinity_psu?: number | null
    latitude?: number | null
    longitude?: number | null
    robot_id: string
  }

  export type water_quality_tempUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    temp_deg_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ph_units?: NullableFloatFieldUpdateOperationsInput | number | null
    depth_m?: NullableFloatFieldUpdateOperationsInput | number | null
    spcond_us_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    turb_ntu?: NullableFloatFieldUpdateOperationsInput | number | null
    hdo_sat?: NullableFloatFieldUpdateOperationsInput | number | null
    hdo_mg_l?: NullableFloatFieldUpdateOperationsInput | number | null
    chl_ug_l?: NullableFloatFieldUpdateOperationsInput | number | null
    bg_ppb?: NullableFloatFieldUpdateOperationsInput | number | null
    ph_mv?: NullableFloatFieldUpdateOperationsInput | number | null
    salinity_psu?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    robot_id?: StringFieldUpdateOperationsInput | string
  }

  export type water_quality_tempUncheckedUpdateManyInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    temp_deg_c?: NullableFloatFieldUpdateOperationsInput | number | null
    ph_units?: NullableFloatFieldUpdateOperationsInput | number | null
    depth_m?: NullableFloatFieldUpdateOperationsInput | number | null
    spcond_us_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    turb_ntu?: NullableFloatFieldUpdateOperationsInput | number | null
    hdo_sat?: NullableFloatFieldUpdateOperationsInput | number | null
    hdo_mg_l?: NullableFloatFieldUpdateOperationsInput | number | null
    chl_ug_l?: NullableFloatFieldUpdateOperationsInput | number | null
    bg_ppb?: NullableFloatFieldUpdateOperationsInput | number | null
    ph_mv?: NullableFloatFieldUpdateOperationsInput | number | null
    salinity_psu?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    robot_id?: StringFieldUpdateOperationsInput | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ecobot_statusRobot_idTimestampCompoundUniqueInput = {
    robot_id: string
    timestamp: Date | string
  }

  export type ecobot_statusCountOrderByAggregateInput = {
    timestamp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    depth_data?: SortOrder
    velocity?: SortOrder
    current_state?: SortOrder
    plc_status?: SortOrder
    pump_values?: SortOrder
    ctr_pv_v?: SortOrder
    ctr_pv_c?: SortOrder
    ctr_bat_temp?: SortOrder
    ctr_device_temp?: SortOrder
    ctr_bat_soc?: SortOrder
    ctr_bat_max_v_today?: SortOrder
    ctr_bat_min_v_today?: SortOrder
    ctr_gen_energy_today?: SortOrder
    ctr_gen_energy_month?: SortOrder
    ctr_gen_energy_year?: SortOrder
    ctr_gen_energy_total?: SortOrder
    ctr_bat_v?: SortOrder
    ctr_bat_c?: SortOrder
    ctr_device_status?: SortOrder
    ctr_bat_status?: SortOrder
    ctr_bat_temp_status?: SortOrder
    ctr_solar_status?: SortOrder
    ctr_charging_status?: SortOrder
    robot_id?: SortOrder
  }

  export type ecobot_statusAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    depth_data?: SortOrder
    velocity?: SortOrder
    current_state?: SortOrder
    plc_status?: SortOrder
    pump_values?: SortOrder
    ctr_pv_v?: SortOrder
    ctr_pv_c?: SortOrder
    ctr_bat_temp?: SortOrder
    ctr_device_temp?: SortOrder
    ctr_bat_soc?: SortOrder
    ctr_bat_max_v_today?: SortOrder
    ctr_bat_min_v_today?: SortOrder
    ctr_gen_energy_today?: SortOrder
    ctr_gen_energy_month?: SortOrder
    ctr_gen_energy_year?: SortOrder
    ctr_gen_energy_total?: SortOrder
    ctr_bat_v?: SortOrder
    ctr_bat_c?: SortOrder
    ctr_device_status?: SortOrder
    ctr_bat_status?: SortOrder
    ctr_bat_temp_status?: SortOrder
    ctr_solar_status?: SortOrder
    ctr_charging_status?: SortOrder
  }

  export type ecobot_statusMaxOrderByAggregateInput = {
    timestamp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    depth_data?: SortOrder
    velocity?: SortOrder
    current_state?: SortOrder
    plc_status?: SortOrder
    ctr_pv_v?: SortOrder
    ctr_pv_c?: SortOrder
    ctr_bat_temp?: SortOrder
    ctr_device_temp?: SortOrder
    ctr_bat_soc?: SortOrder
    ctr_bat_max_v_today?: SortOrder
    ctr_bat_min_v_today?: SortOrder
    ctr_gen_energy_today?: SortOrder
    ctr_gen_energy_month?: SortOrder
    ctr_gen_energy_year?: SortOrder
    ctr_gen_energy_total?: SortOrder
    ctr_bat_v?: SortOrder
    ctr_bat_c?: SortOrder
    ctr_device_status?: SortOrder
    ctr_bat_status?: SortOrder
    ctr_bat_temp_status?: SortOrder
    ctr_solar_status?: SortOrder
    ctr_charging_status?: SortOrder
    robot_id?: SortOrder
  }

  export type ecobot_statusMinOrderByAggregateInput = {
    timestamp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    depth_data?: SortOrder
    velocity?: SortOrder
    current_state?: SortOrder
    plc_status?: SortOrder
    ctr_pv_v?: SortOrder
    ctr_pv_c?: SortOrder
    ctr_bat_temp?: SortOrder
    ctr_device_temp?: SortOrder
    ctr_bat_soc?: SortOrder
    ctr_bat_max_v_today?: SortOrder
    ctr_bat_min_v_today?: SortOrder
    ctr_gen_energy_today?: SortOrder
    ctr_gen_energy_month?: SortOrder
    ctr_gen_energy_year?: SortOrder
    ctr_gen_energy_total?: SortOrder
    ctr_bat_v?: SortOrder
    ctr_bat_c?: SortOrder
    ctr_device_status?: SortOrder
    ctr_bat_status?: SortOrder
    ctr_bat_temp_status?: SortOrder
    ctr_solar_status?: SortOrder
    ctr_charging_status?: SortOrder
    robot_id?: SortOrder
  }

  export type ecobot_statusSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    depth_data?: SortOrder
    velocity?: SortOrder
    current_state?: SortOrder
    plc_status?: SortOrder
    pump_values?: SortOrder
    ctr_pv_v?: SortOrder
    ctr_pv_c?: SortOrder
    ctr_bat_temp?: SortOrder
    ctr_device_temp?: SortOrder
    ctr_bat_soc?: SortOrder
    ctr_bat_max_v_today?: SortOrder
    ctr_bat_min_v_today?: SortOrder
    ctr_gen_energy_today?: SortOrder
    ctr_gen_energy_month?: SortOrder
    ctr_gen_energy_year?: SortOrder
    ctr_gen_energy_total?: SortOrder
    ctr_bat_v?: SortOrder
    ctr_bat_c?: SortOrder
    ctr_device_status?: SortOrder
    ctr_bat_status?: SortOrder
    ctr_bat_temp_status?: SortOrder
    ctr_solar_status?: SortOrder
    ctr_charging_status?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ecobot_status_tempRobot_idTimestampCompoundUniqueInput = {
    robot_id: string
    timestamp: Date | string
  }

  export type ecobot_status_tempCountOrderByAggregateInput = {
    timestamp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    yaw?: SortOrder
    current_angular_vel?: SortOrder
    bearing?: SortOrder
    distance?: SortOrder
    course_goal_distance_threshold?: SortOrder
    holding_goal_distance_threshold?: SortOrder
    course_min_velocity?: SortOrder
    holding_min_velocity?: SortOrder
    course_min_ang_velocity?: SortOrder
    holding_min_ang_velocity?: SortOrder
    bearing_diff?: SortOrder
    depth_data?: SortOrder
    velocity?: SortOrder
    velocity_direction?: SortOrder
    current_state?: SortOrder
    current_course_state?: SortOrder
    plc_status?: SortOrder
    motor_values?: SortOrder
    pump_values?: SortOrder
    ctr_pv_v?: SortOrder
    ctr_pv_c?: SortOrder
    ctr_bat_temp?: SortOrder
    ctr_device_temp?: SortOrder
    ctr_bat_soc?: SortOrder
    ctr_bat_max_v_today?: SortOrder
    ctr_bat_min_v_today?: SortOrder
    ctr_gen_energy_today?: SortOrder
    ctr_gen_energy_month?: SortOrder
    ctr_gen_energy_year?: SortOrder
    ctr_gen_energy_total?: SortOrder
    ctr_bat_v?: SortOrder
    ctr_bat_c?: SortOrder
    ctr_device_status?: SortOrder
    ctr_bat_status?: SortOrder
    ctr_bat_temp_status?: SortOrder
    ctr_solar_status?: SortOrder
    ctr_charging_status?: SortOrder
    other_values?: SortOrder
    current_speeds?: SortOrder
    robot_id?: SortOrder
  }

  export type ecobot_status_tempAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    yaw?: SortOrder
    current_angular_vel?: SortOrder
    bearing?: SortOrder
    distance?: SortOrder
    course_goal_distance_threshold?: SortOrder
    holding_goal_distance_threshold?: SortOrder
    course_min_velocity?: SortOrder
    holding_min_velocity?: SortOrder
    course_min_ang_velocity?: SortOrder
    holding_min_ang_velocity?: SortOrder
    bearing_diff?: SortOrder
    depth_data?: SortOrder
    velocity?: SortOrder
    velocity_direction?: SortOrder
    current_state?: SortOrder
    current_course_state?: SortOrder
    plc_status?: SortOrder
    motor_values?: SortOrder
    pump_values?: SortOrder
    ctr_pv_v?: SortOrder
    ctr_pv_c?: SortOrder
    ctr_bat_temp?: SortOrder
    ctr_device_temp?: SortOrder
    ctr_bat_soc?: SortOrder
    ctr_bat_max_v_today?: SortOrder
    ctr_bat_min_v_today?: SortOrder
    ctr_gen_energy_today?: SortOrder
    ctr_gen_energy_month?: SortOrder
    ctr_gen_energy_year?: SortOrder
    ctr_gen_energy_total?: SortOrder
    ctr_bat_v?: SortOrder
    ctr_bat_c?: SortOrder
    ctr_device_status?: SortOrder
    ctr_bat_status?: SortOrder
    ctr_bat_temp_status?: SortOrder
    ctr_solar_status?: SortOrder
    ctr_charging_status?: SortOrder
    other_values?: SortOrder
    current_speeds?: SortOrder
  }

  export type ecobot_status_tempMaxOrderByAggregateInput = {
    timestamp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    yaw?: SortOrder
    current_angular_vel?: SortOrder
    bearing?: SortOrder
    distance?: SortOrder
    course_goal_distance_threshold?: SortOrder
    holding_goal_distance_threshold?: SortOrder
    course_min_velocity?: SortOrder
    holding_min_velocity?: SortOrder
    course_min_ang_velocity?: SortOrder
    holding_min_ang_velocity?: SortOrder
    bearing_diff?: SortOrder
    depth_data?: SortOrder
    velocity?: SortOrder
    velocity_direction?: SortOrder
    current_state?: SortOrder
    current_course_state?: SortOrder
    plc_status?: SortOrder
    ctr_pv_v?: SortOrder
    ctr_pv_c?: SortOrder
    ctr_bat_temp?: SortOrder
    ctr_device_temp?: SortOrder
    ctr_bat_soc?: SortOrder
    ctr_bat_max_v_today?: SortOrder
    ctr_bat_min_v_today?: SortOrder
    ctr_gen_energy_today?: SortOrder
    ctr_gen_energy_month?: SortOrder
    ctr_gen_energy_year?: SortOrder
    ctr_gen_energy_total?: SortOrder
    ctr_bat_v?: SortOrder
    ctr_bat_c?: SortOrder
    ctr_device_status?: SortOrder
    ctr_bat_status?: SortOrder
    ctr_bat_temp_status?: SortOrder
    ctr_solar_status?: SortOrder
    ctr_charging_status?: SortOrder
    robot_id?: SortOrder
  }

  export type ecobot_status_tempMinOrderByAggregateInput = {
    timestamp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    yaw?: SortOrder
    current_angular_vel?: SortOrder
    bearing?: SortOrder
    distance?: SortOrder
    course_goal_distance_threshold?: SortOrder
    holding_goal_distance_threshold?: SortOrder
    course_min_velocity?: SortOrder
    holding_min_velocity?: SortOrder
    course_min_ang_velocity?: SortOrder
    holding_min_ang_velocity?: SortOrder
    bearing_diff?: SortOrder
    depth_data?: SortOrder
    velocity?: SortOrder
    velocity_direction?: SortOrder
    current_state?: SortOrder
    current_course_state?: SortOrder
    plc_status?: SortOrder
    ctr_pv_v?: SortOrder
    ctr_pv_c?: SortOrder
    ctr_bat_temp?: SortOrder
    ctr_device_temp?: SortOrder
    ctr_bat_soc?: SortOrder
    ctr_bat_max_v_today?: SortOrder
    ctr_bat_min_v_today?: SortOrder
    ctr_gen_energy_today?: SortOrder
    ctr_gen_energy_month?: SortOrder
    ctr_gen_energy_year?: SortOrder
    ctr_gen_energy_total?: SortOrder
    ctr_bat_v?: SortOrder
    ctr_bat_c?: SortOrder
    ctr_device_status?: SortOrder
    ctr_bat_status?: SortOrder
    ctr_bat_temp_status?: SortOrder
    ctr_solar_status?: SortOrder
    ctr_charging_status?: SortOrder
    robot_id?: SortOrder
  }

  export type ecobot_status_tempSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    yaw?: SortOrder
    current_angular_vel?: SortOrder
    bearing?: SortOrder
    distance?: SortOrder
    course_goal_distance_threshold?: SortOrder
    holding_goal_distance_threshold?: SortOrder
    course_min_velocity?: SortOrder
    holding_min_velocity?: SortOrder
    course_min_ang_velocity?: SortOrder
    holding_min_ang_velocity?: SortOrder
    bearing_diff?: SortOrder
    depth_data?: SortOrder
    velocity?: SortOrder
    velocity_direction?: SortOrder
    current_state?: SortOrder
    current_course_state?: SortOrder
    plc_status?: SortOrder
    motor_values?: SortOrder
    pump_values?: SortOrder
    ctr_pv_v?: SortOrder
    ctr_pv_c?: SortOrder
    ctr_bat_temp?: SortOrder
    ctr_device_temp?: SortOrder
    ctr_bat_soc?: SortOrder
    ctr_bat_max_v_today?: SortOrder
    ctr_bat_min_v_today?: SortOrder
    ctr_gen_energy_today?: SortOrder
    ctr_gen_energy_month?: SortOrder
    ctr_gen_energy_year?: SortOrder
    ctr_gen_energy_total?: SortOrder
    ctr_bat_v?: SortOrder
    ctr_bat_c?: SortOrder
    ctr_device_status?: SortOrder
    ctr_bat_status?: SortOrder
    ctr_bat_temp_status?: SortOrder
    ctr_solar_status?: SortOrder
    ctr_charging_status?: SortOrder
    other_values?: SortOrder
    current_speeds?: SortOrder
  }

  export type ecobot_ts_infoRobot_idTimestampCompoundUniqueInput = {
    robot_id: string
    timestamp: Date | string
  }

  export type ecobot_ts_infoCountOrderByAggregateInput = {
    timestamp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    plc_status?: SortOrder
    ctr_pv_v?: SortOrder
    ctr_pv_c?: SortOrder
    ctr_bat_soc?: SortOrder
    ctr_bat_max_v_today?: SortOrder
    ctr_bat_min_v_today?: SortOrder
    ctr_gen_energy_today?: SortOrder
    ctr_gen_energy_month?: SortOrder
    ctr_gen_energy_year?: SortOrder
    ctr_gen_energy_total?: SortOrder
    ctr_bat_v?: SortOrder
    ctr_bat_c?: SortOrder
    ctr_device_status?: SortOrder
    ctr_bat_status?: SortOrder
    ctr_bat_temp_status?: SortOrder
    ctr_solar_status?: SortOrder
    ctr_charging_status?: SortOrder
    robot_id?: SortOrder
  }

  export type ecobot_ts_infoAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    plc_status?: SortOrder
    ctr_pv_v?: SortOrder
    ctr_pv_c?: SortOrder
    ctr_bat_soc?: SortOrder
    ctr_bat_max_v_today?: SortOrder
    ctr_bat_min_v_today?: SortOrder
    ctr_gen_energy_today?: SortOrder
    ctr_gen_energy_month?: SortOrder
    ctr_gen_energy_year?: SortOrder
    ctr_gen_energy_total?: SortOrder
    ctr_bat_v?: SortOrder
    ctr_bat_c?: SortOrder
    ctr_device_status?: SortOrder
    ctr_bat_status?: SortOrder
    ctr_bat_temp_status?: SortOrder
    ctr_solar_status?: SortOrder
    ctr_charging_status?: SortOrder
  }

  export type ecobot_ts_infoMaxOrderByAggregateInput = {
    timestamp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    plc_status?: SortOrder
    ctr_pv_v?: SortOrder
    ctr_pv_c?: SortOrder
    ctr_bat_soc?: SortOrder
    ctr_bat_max_v_today?: SortOrder
    ctr_bat_min_v_today?: SortOrder
    ctr_gen_energy_today?: SortOrder
    ctr_gen_energy_month?: SortOrder
    ctr_gen_energy_year?: SortOrder
    ctr_gen_energy_total?: SortOrder
    ctr_bat_v?: SortOrder
    ctr_bat_c?: SortOrder
    ctr_device_status?: SortOrder
    ctr_bat_status?: SortOrder
    ctr_bat_temp_status?: SortOrder
    ctr_solar_status?: SortOrder
    ctr_charging_status?: SortOrder
    robot_id?: SortOrder
  }

  export type ecobot_ts_infoMinOrderByAggregateInput = {
    timestamp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    plc_status?: SortOrder
    ctr_pv_v?: SortOrder
    ctr_pv_c?: SortOrder
    ctr_bat_soc?: SortOrder
    ctr_bat_max_v_today?: SortOrder
    ctr_bat_min_v_today?: SortOrder
    ctr_gen_energy_today?: SortOrder
    ctr_gen_energy_month?: SortOrder
    ctr_gen_energy_year?: SortOrder
    ctr_gen_energy_total?: SortOrder
    ctr_bat_v?: SortOrder
    ctr_bat_c?: SortOrder
    ctr_device_status?: SortOrder
    ctr_bat_status?: SortOrder
    ctr_bat_temp_status?: SortOrder
    ctr_solar_status?: SortOrder
    ctr_charging_status?: SortOrder
    robot_id?: SortOrder
  }

  export type ecobot_ts_infoSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    plc_status?: SortOrder
    ctr_pv_v?: SortOrder
    ctr_pv_c?: SortOrder
    ctr_bat_soc?: SortOrder
    ctr_bat_max_v_today?: SortOrder
    ctr_bat_min_v_today?: SortOrder
    ctr_gen_energy_today?: SortOrder
    ctr_gen_energy_month?: SortOrder
    ctr_gen_energy_year?: SortOrder
    ctr_gen_energy_total?: SortOrder
    ctr_bat_v?: SortOrder
    ctr_bat_c?: SortOrder
    ctr_device_status?: SortOrder
    ctr_bat_status?: SortOrder
    ctr_bat_temp_status?: SortOrder
    ctr_solar_status?: SortOrder
    ctr_charging_status?: SortOrder
  }

  export type ecobot_ts_info_tempRobot_idTimestampCompoundUniqueInput = {
    robot_id: string
    timestamp: Date | string
  }

  export type ecobot_ts_info_tempCountOrderByAggregateInput = {
    timestamp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    plc_status?: SortOrder
    ctr_pv_v?: SortOrder
    ctr_pv_c?: SortOrder
    ctr_bat_soc?: SortOrder
    ctr_bat_max_v_today?: SortOrder
    ctr_bat_min_v_today?: SortOrder
    ctr_gen_energy_today?: SortOrder
    ctr_gen_energy_month?: SortOrder
    ctr_gen_energy_year?: SortOrder
    ctr_gen_energy_total?: SortOrder
    ctr_bat_v?: SortOrder
    ctr_bat_c?: SortOrder
    ctr_device_status?: SortOrder
    ctr_bat_status?: SortOrder
    ctr_bat_temp_status?: SortOrder
    ctr_solar_status?: SortOrder
    ctr_charging_status?: SortOrder
    robot_id?: SortOrder
  }

  export type ecobot_ts_info_tempAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    plc_status?: SortOrder
    ctr_pv_v?: SortOrder
    ctr_pv_c?: SortOrder
    ctr_bat_soc?: SortOrder
    ctr_bat_max_v_today?: SortOrder
    ctr_bat_min_v_today?: SortOrder
    ctr_gen_energy_today?: SortOrder
    ctr_gen_energy_month?: SortOrder
    ctr_gen_energy_year?: SortOrder
    ctr_gen_energy_total?: SortOrder
    ctr_bat_v?: SortOrder
    ctr_bat_c?: SortOrder
    ctr_device_status?: SortOrder
    ctr_bat_status?: SortOrder
    ctr_bat_temp_status?: SortOrder
    ctr_solar_status?: SortOrder
    ctr_charging_status?: SortOrder
  }

  export type ecobot_ts_info_tempMaxOrderByAggregateInput = {
    timestamp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    plc_status?: SortOrder
    ctr_pv_v?: SortOrder
    ctr_pv_c?: SortOrder
    ctr_bat_soc?: SortOrder
    ctr_bat_max_v_today?: SortOrder
    ctr_bat_min_v_today?: SortOrder
    ctr_gen_energy_today?: SortOrder
    ctr_gen_energy_month?: SortOrder
    ctr_gen_energy_year?: SortOrder
    ctr_gen_energy_total?: SortOrder
    ctr_bat_v?: SortOrder
    ctr_bat_c?: SortOrder
    ctr_device_status?: SortOrder
    ctr_bat_status?: SortOrder
    ctr_bat_temp_status?: SortOrder
    ctr_solar_status?: SortOrder
    ctr_charging_status?: SortOrder
    robot_id?: SortOrder
  }

  export type ecobot_ts_info_tempMinOrderByAggregateInput = {
    timestamp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    plc_status?: SortOrder
    ctr_pv_v?: SortOrder
    ctr_pv_c?: SortOrder
    ctr_bat_soc?: SortOrder
    ctr_bat_max_v_today?: SortOrder
    ctr_bat_min_v_today?: SortOrder
    ctr_gen_energy_today?: SortOrder
    ctr_gen_energy_month?: SortOrder
    ctr_gen_energy_year?: SortOrder
    ctr_gen_energy_total?: SortOrder
    ctr_bat_v?: SortOrder
    ctr_bat_c?: SortOrder
    ctr_device_status?: SortOrder
    ctr_bat_status?: SortOrder
    ctr_bat_temp_status?: SortOrder
    ctr_solar_status?: SortOrder
    ctr_charging_status?: SortOrder
    robot_id?: SortOrder
  }

  export type ecobot_ts_info_tempSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    plc_status?: SortOrder
    ctr_pv_v?: SortOrder
    ctr_pv_c?: SortOrder
    ctr_bat_soc?: SortOrder
    ctr_bat_max_v_today?: SortOrder
    ctr_bat_min_v_today?: SortOrder
    ctr_gen_energy_today?: SortOrder
    ctr_gen_energy_month?: SortOrder
    ctr_gen_energy_year?: SortOrder
    ctr_gen_energy_total?: SortOrder
    ctr_bat_v?: SortOrder
    ctr_bat_c?: SortOrder
    ctr_device_status?: SortOrder
    ctr_bat_status?: SortOrder
    ctr_bat_temp_status?: SortOrder
    ctr_solar_status?: SortOrder
    ctr_charging_status?: SortOrder
  }

  export type water_qualityRobot_idTimestampCompoundUniqueInput = {
    robot_id: string
    timestamp: Date | string
  }

  export type water_qualityCountOrderByAggregateInput = {
    timestamp?: SortOrder
    temp_deg_c?: SortOrder
    ph_units?: SortOrder
    depth_m?: SortOrder
    spcond_us_cm?: SortOrder
    turb_ntu?: SortOrder
    hdo_sat?: SortOrder
    hdo_mg_l?: SortOrder
    chl_ug_l?: SortOrder
    bg_ppb?: SortOrder
    ph_mv?: SortOrder
    salinity_psu?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    robot_id?: SortOrder
  }

  export type water_qualityAvgOrderByAggregateInput = {
    temp_deg_c?: SortOrder
    ph_units?: SortOrder
    depth_m?: SortOrder
    spcond_us_cm?: SortOrder
    turb_ntu?: SortOrder
    hdo_sat?: SortOrder
    hdo_mg_l?: SortOrder
    chl_ug_l?: SortOrder
    bg_ppb?: SortOrder
    ph_mv?: SortOrder
    salinity_psu?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type water_qualityMaxOrderByAggregateInput = {
    timestamp?: SortOrder
    temp_deg_c?: SortOrder
    ph_units?: SortOrder
    depth_m?: SortOrder
    spcond_us_cm?: SortOrder
    turb_ntu?: SortOrder
    hdo_sat?: SortOrder
    hdo_mg_l?: SortOrder
    chl_ug_l?: SortOrder
    bg_ppb?: SortOrder
    ph_mv?: SortOrder
    salinity_psu?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    robot_id?: SortOrder
  }

  export type water_qualityMinOrderByAggregateInput = {
    timestamp?: SortOrder
    temp_deg_c?: SortOrder
    ph_units?: SortOrder
    depth_m?: SortOrder
    spcond_us_cm?: SortOrder
    turb_ntu?: SortOrder
    hdo_sat?: SortOrder
    hdo_mg_l?: SortOrder
    chl_ug_l?: SortOrder
    bg_ppb?: SortOrder
    ph_mv?: SortOrder
    salinity_psu?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    robot_id?: SortOrder
  }

  export type water_qualitySumOrderByAggregateInput = {
    temp_deg_c?: SortOrder
    ph_units?: SortOrder
    depth_m?: SortOrder
    spcond_us_cm?: SortOrder
    turb_ntu?: SortOrder
    hdo_sat?: SortOrder
    hdo_mg_l?: SortOrder
    chl_ug_l?: SortOrder
    bg_ppb?: SortOrder
    ph_mv?: SortOrder
    salinity_psu?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type water_quality_tempRobot_idTimestampCompoundUniqueInput = {
    robot_id: string
    timestamp: Date | string
  }

  export type water_quality_tempCountOrderByAggregateInput = {
    timestamp?: SortOrder
    temp_deg_c?: SortOrder
    ph_units?: SortOrder
    depth_m?: SortOrder
    spcond_us_cm?: SortOrder
    turb_ntu?: SortOrder
    hdo_sat?: SortOrder
    hdo_mg_l?: SortOrder
    chl_ug_l?: SortOrder
    bg_ppb?: SortOrder
    ph_mv?: SortOrder
    salinity_psu?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    robot_id?: SortOrder
  }

  export type water_quality_tempAvgOrderByAggregateInput = {
    temp_deg_c?: SortOrder
    ph_units?: SortOrder
    depth_m?: SortOrder
    spcond_us_cm?: SortOrder
    turb_ntu?: SortOrder
    hdo_sat?: SortOrder
    hdo_mg_l?: SortOrder
    chl_ug_l?: SortOrder
    bg_ppb?: SortOrder
    ph_mv?: SortOrder
    salinity_psu?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type water_quality_tempMaxOrderByAggregateInput = {
    timestamp?: SortOrder
    temp_deg_c?: SortOrder
    ph_units?: SortOrder
    depth_m?: SortOrder
    spcond_us_cm?: SortOrder
    turb_ntu?: SortOrder
    hdo_sat?: SortOrder
    hdo_mg_l?: SortOrder
    chl_ug_l?: SortOrder
    bg_ppb?: SortOrder
    ph_mv?: SortOrder
    salinity_psu?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    robot_id?: SortOrder
  }

  export type water_quality_tempMinOrderByAggregateInput = {
    timestamp?: SortOrder
    temp_deg_c?: SortOrder
    ph_units?: SortOrder
    depth_m?: SortOrder
    spcond_us_cm?: SortOrder
    turb_ntu?: SortOrder
    hdo_sat?: SortOrder
    hdo_mg_l?: SortOrder
    chl_ug_l?: SortOrder
    bg_ppb?: SortOrder
    ph_mv?: SortOrder
    salinity_psu?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    robot_id?: SortOrder
  }

  export type water_quality_tempSumOrderByAggregateInput = {
    temp_deg_c?: SortOrder
    ph_units?: SortOrder
    depth_m?: SortOrder
    spcond_us_cm?: SortOrder
    turb_ntu?: SortOrder
    hdo_sat?: SortOrder
    hdo_mg_l?: SortOrder
    chl_ug_l?: SortOrder
    bg_ppb?: SortOrder
    ph_mv?: SortOrder
    salinity_psu?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type ecobot_statusCreatepump_valuesInput = {
    set: number[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ecobot_statusUpdatepump_valuesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ecobot_status_tempCreatemotor_valuesInput = {
    set: number[]
  }

  export type ecobot_status_tempCreatepump_valuesInput = {
    set: number[]
  }

  export type ecobot_status_tempCreateother_valuesInput = {
    set: number[]
  }

  export type ecobot_status_tempCreatecurrent_speedsInput = {
    set: number[]
  }

  export type ecobot_status_tempUpdatemotor_valuesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ecobot_status_tempUpdatepump_valuesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ecobot_status_tempUpdateother_valuesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ecobot_status_tempUpdatecurrent_speedsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ecobot_statusDefaultArgs instead
     */
    export type ecobot_statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ecobot_statusDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ecobot_status_tempDefaultArgs instead
     */
    export type ecobot_status_tempArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ecobot_status_tempDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ecobot_ts_infoDefaultArgs instead
     */
    export type ecobot_ts_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ecobot_ts_infoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ecobot_ts_info_tempDefaultArgs instead
     */
    export type ecobot_ts_info_tempArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ecobot_ts_info_tempDefaultArgs<ExtArgs>
    /**
     * @deprecated Use water_qualityDefaultArgs instead
     */
    export type water_qualityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = water_qualityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use water_quality_tempDefaultArgs instead
     */
    export type water_quality_tempArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = water_quality_tempDefaultArgs<ExtArgs>

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